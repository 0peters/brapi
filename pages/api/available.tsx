import axios from 'axios';
// import { logHost } from '../../utils/logHost';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { search } = req.query;
  res.setHeader('Cache-Control', 's-maxage=2592000, stale-while-revalidate');

  const formData = {
    filter: [
      {
        left: 'volume',
        operation: 'nempty',
        right: '',
      },
    ],
    options: {
      lang: 'pt',
      active_symbols_only: true,
    },
    symbols: {},
    columns: ['logoid', 'name', 'close'],
    sort: {
      sortBy: 'volume',
      sortOrder: 'desc',
    },
    range: [0, 2000],
  };

  search &&
    formData.filter.push({
      left: 'name',
      operation: 'match',
      right: search.toString(),
    });

  const response = await axios.post(
    `https://scanner.tradingview.com/brazil/scan`,
    formData,
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
  );

  const paths = await response.data.data.map((stock: any) => {
    const availableStock = stock.s
      .replace('3F', '3')
      .replace('4F', '4')
      .replace('11F', '11')
      .replace('6F', '6')
      .replace('BMFBOVESPA:', '');

    return availableStock;
  });

  const uniqueStocks = [...new Set(paths)];

  res.status(200).json({
    stocks: uniqueStocks,
  });

  // logHost(req, 'available');
};
