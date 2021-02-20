import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { QuoteProps } from '../../../@types/QuoteProps';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slugs } = req.query;
  const allSlugs = slugs.toString().split(',');

  if (slugs) {
    const responseAllSlugs = async () => {
      let responseArray: any = [];

      allSlugs.map(async (slug, i) => {
        try {
          const response = await axios.get(
            `https://query1.finance.yahoo.com/v7/finance/options/${slug}.SA`,
          );

          const data: QuoteProps = await response.data.optionChain.result[0]
            .quote;

          const quote = {
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

          if (response.status === 200) {
            responseArray.push(quote);
          }

          const dynamicDate = new Date();
          if (i + 1 === allSlugs.length) {
            setTimeout(() => {
              res.status(200).json({
                results: responseArray,
                requestedAt: dynamicDate,
              });
            }, i * 5);
          }
        } catch (err) {
          // console.log(err);
          res.status(404).send({
            error: `Não encontramos a ação ${slug.toString().toUpperCase()}`,
          });
        }
      });

      return responseArray;
    };

    await responseAllSlugs();
  }
};

// Next was returning a false positive { API resolved without sending a response... }
export const config = {
  api: {
    externalResolver: true,
  },
};
