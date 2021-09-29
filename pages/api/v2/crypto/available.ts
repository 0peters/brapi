import { NextApiRequest, NextApiResponse } from 'next';
import { availableCoins } from '../../../../utils/availableCoins';
// import { logHost } from '../../../../utils/logHost';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { search } = req.query;

  res.setHeader('Cache-Control', 's-maxage=2592000, stale-while-revalidate');

  if (!!search?.length) {
    const searchedCoins = availableCoins.filter((coin) => {
      return (
        coin
          .toString()
          .toLowerCase()
          .slice(0, search.length)
          .indexOf(search.toString().toLowerCase()) == 0
      );
    });

    if (!!searchedCoins?.length) {
      res.status(200).json({
        coins: searchedCoins,
      });
      return;
    }

    res.status(404).json({
      message: 'Coin not found',
    });
    return;
  }

  res.status(200).json({
    coins: availableCoins,
  });

  // logHost(req, 'v2/crypto/available');
};
