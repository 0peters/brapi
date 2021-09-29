import axios from 'axios';
// import { logHost } from '../../../utils/logHost';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { sortBy, sortOrder, limit } = req.query;

  res.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate');

  const availableSorts = [
    'name',
    'close',
    'change',
    'change_abs',
    'volume',
    'market_cap_basic',
  ];

  const availablesortOrder = ['desc', 'asc'];

  if (sortBy && !availableSorts.includes(sortBy?.toString())) {
    res.status(417).json({
      error: true,
      message: `${sortBy} query value is not available, please use one of the following: ${availableSorts}`,
    });
  }

  if (sortOrder && !availablesortOrder.includes(sortOrder?.toString())) {
    res.status(417).json({
      error: true,
      message: `${sortOrder} query value is not available, please use one of the following: ${availablesortOrder}`,
    });
  }

  if (limit && !Number(limit)) {
    res.status(417).json({
      error: true,
      message: `limit must be a number`,
    });
  }

  const formData = {
    filter: [
      {
        left: sortBy?.toString() || 'volume',
        operation: 'nempty',
      },
      {
        left: 'type',
        operation: 'equal',
        right: 'stock',
      },
      {
        left: 'subtype',
        operation: 'equal',
        right: 'common',
      },
    ],
    options: {
      lang: 'pt',
      active_symbols_only: true,
    },
    symbols: {},
    columns: ['close', 'change', 'volume', 'market_cap_basic', 'description'],
    sort: {
      sortBy: sortBy?.toString() || 'volume',
      sortOrder: sortOrder?.toString() || 'desc',
    },
    range: [0, Number(limit) || 2000],
  };

  const response = await axios.post(
    `https://scanner.tradingview.com/brazil/scan`,
    formData,
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
  );

  const paths = await response.data.data.map((stock: any) => {
    const cleanString = (dirtyString: string) => {
      return dirtyString
        .replace(' ON', '')
        .replace(' ON', '')
        .replace(' NM', '')
        .replace(' EJ', '')
        .replace(' REON', '')
        .replace(' N1', '')
        .replace(' N2', '');
    };

    const availableStock = stock.s
      .replace('3F', '3')
      .replace('4F', '4')
      .replace('11F', '11')
      .replace('6F', '6')
      .replace('BMFBOVESPA:', '');

    const cleanName = cleanString(stock.d[4]);

    const stockInformation = {
      stock: availableStock,
      name: cleanName,
      close: stock.d[0],
      change: stock.d[1],
      volume: stock.d[2],
      market_cap: stock.d[3],
    };

    return stockInformation;
  });

  const uniqueStocks = [...new Set(paths)];

  res.status(200).json({
    stocks: uniqueStocks,
  });

  // logHost(req, 'list');
};
