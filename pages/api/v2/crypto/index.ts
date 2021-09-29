import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
// import { logHost } from '../../../../utils/logHost';

interface LooseObject {
  [key: string]: any;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { coin, currency } = req.query;

  if (!coin) {
    res.status(417).send({
      error: true,
      message: 'Missing required parameter: `coin`',
    });
  }

  if (req.method !== 'GET') {
    res.status(405).send({
      error: true,
      message: 'Method not allowed',
    });
  }

  res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate'); //15 minutes cache

  const coins = coin.toString().split(',');

  const yahooSlugs = coins
    .map((slug) => {
      return `${slug}-USD`;
    })
    .join(',');

  try {
    const { data: yahooResponse } = await axios.get(
      `https://query1.finance.yahoo.com/v7/finance/quote?&symbols=${yahooSlugs}`,
    );

    const yahooData = yahooResponse.quoteResponse.result;

    let USDPriceInCurrency: any;

    if (currency?.toString()?.toUpperCase() != 'USD') {
      const { data } = await axios.get(
        `https://economia.awesomeapi.com.br/json/last/USD-${
          currency?.toString()?.toUpperCase() || 'BRL'
        }`,
      );
      USDPriceInCurrency = data;
    }

    const USDToCurrency = (usdPrice: string | number) => {
      if (currency?.toString()?.toUpperCase() == 'USD') {
        return Number(usdPrice);
      }

      const currencyPrice = Number(
        USDPriceInCurrency[`USD${currency?.toString()?.toUpperCase() || 'BRL'}`]
          .bid,
      );

      return currencyPrice * Number(usdPrice);
    };

    const coinResponse = yahooData.map((yahooCoin: LooseObject) => ({
      currency: `${currency?.toString()?.toUpperCase() || 'BRL'}`,
      currencyRateFromUSD: USDToCurrency(1),
      coinName: yahooCoin.shortName,
      coin: yahooCoin.symbol.replace('-USD', ''),
      regularMarketChange: USDToCurrency(yahooCoin.regularMarketChange),
      regularMarketPrice: USDToCurrency(yahooCoin.regularMarketPrice),
      regularMarketChangePercent: yahooCoin.regularMarketChangePercent,
      regularMarketDayLow: USDToCurrency(yahooCoin.regularMarketDayLow),
      regularMarketDayHigh: USDToCurrency(yahooCoin.regularMarketDayHigh),
      regularMarketDayRange: `${USDToCurrency(
        yahooCoin.regularMarketDayLow,
      )} - ${USDToCurrency(yahooCoin.regularMarketDayHigh)}`,
      regularMarketVolume: USDToCurrency(yahooCoin.regularMarketVolume),
      marketCap: USDToCurrency(yahooCoin.marketCap),
      regularMarketTime: yahooCoin.regularMarketTime,
      coinImageUrl: yahooCoin.coinImageUrl,
    }));

    res.status(200).json({ coins: coinResponse });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: true,
      message: 'Something went wrong while fetching the data',
    });
  }

  // logHost(req, 'v2/crypto');
};
