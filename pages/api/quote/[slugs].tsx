import axios from 'axios';
// import { logHost } from '../../../utils/logHost';
import { NextApiRequest, NextApiResponse } from 'next';
import { QuoteProps } from '../../../@types/QuoteProps';

interface LooseObject {
  [key: string]: any;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.headers['user-agent']);
  if (req.headers['user-agent']?.includes('python-requests')) {
    res.setHeader('Cache-Control', 's-maxage=2592000, stale-while-revalidate');

    res.status(403).json({
      error: true,
      message:
        'Your limit exceeded, please email us at brapi@protonmail.com for more information',
    });
    return;
  }
  const { slugs } = req.query;
  const { interval } = req.query;
  const { range } = req.query;
  const { fundamental } = req.query;

  const validRanges = [
    '1d',
    '5d',
    '1mo',
    '3mo',
    '6mo',
    '1y',
    '2y',
    '5y',
    '10y',
    'ytd',
    'max',
  ];

  const allSlugs = slugs.toString().split(',');

  if (slugs) {
    res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate');

    const responseAllSlugs = async () => {
      const promises = allSlugs.map(async (slug) => {
        try {
          const response = await axios.get(
            `https://query1.finance.yahoo.com/v7/finance/options/${slug}.SA`,
          );

          let fundamentalInformation = [];

          if (fundamental) {
            const formDataTradingView = {
              symbols: {
                tickers: [`BMFBOVESPA:${slug.toUpperCase()}`],
                query: {
                  types: [],
                },
              },
              columns: ['price_earnings_ttm', 'earnings_per_share_basic_ttm'],
            };

            const responseTradingView = await axios.post(
              `https://scanner.tradingview.com/brazil/scan`,
              formDataTradingView,
              {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
              },
            );

            fundamentalInformation.push(responseTradingView.data.data[0].d);
          }

          const getHistory = async () => {
            const historicalResponse = await axios.get(
              `https://query1.finance.yahoo.com/v8/finance/chart/${slug}.SA${
                interval && range
                  ? `?includePrePost=false&interval=${interval}&useYfid=true&range=${range}`
                  : '?includePrePost=false&interval=1d&useYfid=true&range=1mo'
              }`,
            );

            const { timestamp } = await historicalResponse.data.chart.result[0];
            const { low, high, open, close, volume } = await historicalResponse
              .data.chart.result[0].indicators.quote[0];

            const prices: Array<{}> = [];
            for (let index = 0; index < timestamp.length; index++) {
              const price = {
                date: timestamp[index],
                open: open[index],
                high: high[index],
                low: low[index],
                close: close[index],
                volume: volume[index],
              };

              prices.push(price);
            }

            return prices;
          };

          const data: QuoteProps = await response.data.optionChain.result[0]
            .quote;

          if (interval && range) {
            const historicalData = await getHistory();
            const historicalQuote: LooseObject = {
              symbol: slug.toString().toUpperCase(),
              shortName: data.shortName,
              longName: data.longName,
              currency: data.currency,
              regularMarketPrice: data.regularMarketPrice,
              regularMarketDayHigh: data.regularMarketDayHigh,
              regularMarketDayLow: data.regularMarketDayLow,
              regularMarketDayRange: data.regularMarketDayRange,
              regularMarketChange: data.regularMarketChange,
              regularMarketChangePercent: data.regularMarketChangePercent,
              regularMarketTime: new Date(data.regularMarketTime * 1000),
              marketCap: data.marketCap,
              regularMarketVolume: data.regularMarketVolume,
              regularMarketPreviousClose: data.regularMarketPreviousClose,
              regularMarketOpen: data.regularMarketOpen,
              averageDailyVolume10Day: data.averageDailyVolume10Day,
              averageDailyVolume3Month: data.averageDailyVolume3Month,
              fiftyTwoWeekLowChange: data.fiftyTwoWeekLowChange,
              fiftyTwoWeekLowChangePercent: data.fiftyTwoWeekLowChangePercent,
              fiftyTwoWeekRange: data.fiftyTwoWeekRange,
              fiftyTwoWeekHighChange: data.fiftyTwoWeekHighChange,
              fiftyTwoWeekHighChangePercent: data.fiftyTwoWeekHighChangePercent,
              fiftyTwoWeekLow: data.fiftyTwoWeekLow,
              fiftyTwoWeekHigh: data.fiftyTwoWeekHigh,
              twoHundredDayAverage: data.twoHundredDayAverage,
              twoHundredDayAverageChange: data.twoHundredDayAverageChange,
              twoHundredDayAverageChangePercent:
                data.twoHundredDayAverageChangePercent,
              validRanges: validRanges,
              historicalDataPrice: historicalData,
            };

            if (fundamental) {
              historicalQuote.priceEarnings = fundamentalInformation[0][0];
              historicalQuote.earningsPerShare = fundamentalInformation[0][1];
            }

            if (response.status === 200) {
              return historicalQuote;
            }
          }

          const quote: LooseObject = {
            symbol: slug.toString().toUpperCase(),
            shortName: data.shortName,
            longName: data.longName,
            currency: data.currency,
            regularMarketPrice: data.regularMarketPrice,
            regularMarketDayHigh: data.regularMarketDayHigh,
            regularMarketDayLow: data.regularMarketDayLow,
            regularMarketDayRange: data.regularMarketDayRange,
            regularMarketChange: data.regularMarketChange,
            regularMarketChangePercent: data.regularMarketChangePercent,
            regularMarketTime: new Date(data.regularMarketTime * 1000),
            marketCap: data.marketCap,
            regularMarketVolume: data.regularMarketVolume,
            regularMarketPreviousClose: data.regularMarketPreviousClose,
            regularMarketOpen: data.regularMarketOpen,
            averageDailyVolume10Day: data.averageDailyVolume10Day,
            averageDailyVolume3Month: data.averageDailyVolume3Month,
            fiftyTwoWeekLowChange: data.fiftyTwoWeekLowChange,
            fiftyTwoWeekLowChangePercent: data.fiftyTwoWeekLowChangePercent,
            fiftyTwoWeekRange: data.fiftyTwoWeekRange,
            fiftyTwoWeekHighChange: data.fiftyTwoWeekHighChange,
            fiftyTwoWeekHighChangePercent: data.fiftyTwoWeekHighChangePercent,
            fiftyTwoWeekLow: data.fiftyTwoWeekLow,
            fiftyTwoWeekHigh: data.fiftyTwoWeekHigh,
            twoHundredDayAverage: data.twoHundredDayAverage,
            twoHundredDayAverageChange: data.twoHundredDayAverageChange,
            twoHundredDayAverageChangePercent:
              data.twoHundredDayAverageChangePercent,
          };

          if (fundamental) {
            quote.priceEarnings = fundamentalInformation[0][0];
            quote.earningsPerShare = fundamentalInformation[0][1];
          }

          if (response.status === 200) {
            return quote;
          }
        } catch (err) {
          res.status(404).send({
            error: `Não encontramos a ação ${slug.toString().toUpperCase()}`,
            err: err,
          });
          return;
        }
      });

      const dynamicDate = new Date();
      const actualData = await Promise.all(promises);
      res.status(200).json({
        results: actualData,
        requestedAt: dynamicDate,
      });
    };

    await responseAllSlugs();
  }

  // logHost(req, 'quote');
};
