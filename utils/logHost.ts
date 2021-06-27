import Redis from 'ioredis';
import { getClientIp } from 'request-ip';
import { NextApiRequest } from 'next';

export const logHost = async (req: NextApiRequest, path: string) => {
  const { referer, origin } = req.headers;
  const userIp = getClientIp(req);
  const redisPath = `brapi:${path}:${origin || referer || userIp}`;

  const client = new Redis(process.env.REDIS_URL);
  await client.incr(redisPath);
  client.quit();
};
