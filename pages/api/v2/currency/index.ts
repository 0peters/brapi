import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
// import { logHost } from '../../../../utils/logHost';

interface ResponseProps {
  [key: string]: {
    code: string;
    codein: string;
    name: string;
    high: string;
    low: string;
    varBid: string;
    pctChange: string;
    bid: string;
    ask: string;
    timestamp: string;
    create_date: string;
  };
}

interface DataProps {
  fromCurrency: string;
  toCurrency: string;
  name: string;
  high: string;
  low: string;
  bidVariation: string;
  percentageChange: string;
  bidPrice: string;
  askPrice: string;
  updatedAtTimestamp: string;
  updatedAtDate: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { currency } = req.query;

  if (!currency) {
    res.status(417).send({
      error: true,
      message: 'Missing required parameter: `currency`',
    });
  }

  if (req.method !== 'GET') {
    res.status(405).send({
      error: true,
      message: 'Method not allowed',
    });
  }

  res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate'); // 15 minutes cache

  try {
    const response = await axios.get<ResponseProps>(
      `https://economia.awesomeapi.com.br/json/last/${currency}`,
    );

    const data: DataProps[] = Object.keys(response.data).map((key) => ({
      fromCurrency: response.data[key].code,
      toCurrency: response.data[key].codein,
      name: response.data[key].name,
      high: response.data[key].high,
      low: response.data[key].low,
      bidVariation: response.data[key].varBid,
      percentageChange: response.data[key].pctChange,
      bidPrice: response.data[key].bid,
      askPrice: response.data[key].ask,
      updatedAtTimestamp: response.data[key].timestamp,
      updatedAtDate: response.data[key].create_date,
    }));

    res.status(200).json({ currency: data });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: true,
      message: 'Something went wrong while fetching the data',
    });
  }

  // logHost(req, 'v2/currency');
};
