// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export interface QuoteProps {
  currency: string;
  symbol: string;
  firstTradeDate: number;
  regularMarketTime: number;
  regularMarketPrice: number;
  chartPreviousClose: number;
  previousClose: number;
}

import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;

  try {
    const response = await axios.get(
      `https://query1.finance.yahoo.com/v8/finance/chart/${slug}.SA`,
    );

    const data: QuoteProps = response.data.chart.result[0].meta;

    const quote = {
      currency: data.currency,
      symbol: slug.toString().toUpperCase(),
      firstTradeDate: data.firstTradeDate,
      regularMarketTime: data.regularMarketTime,
      regularMarketPrice: data.regularMarketPrice,
      chartPreviousClose: data.chartPreviousClose,
      previousClose: data.previousClose,
    };
    res.status(200).json({ quote });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
