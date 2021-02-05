import axios from 'axios';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React from 'react';
import Header from '../../components/Header';
import MainQuote, { StocksProps } from '../../components/MainQuote';
import Layout from '../../Layout';

export async function getStaticProps() {
  const formData = {
    filter: [
      {
        left: 'volume',
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
    columns: [
      'logoid',
      'name',
      'close',
      'change',
      'volume',
      'market_cap_basic',
      'sector',
    ],
    sort: {
      sortBy: 'volume',
      sortOrder: 'desc',
    },
    range: [0, 20],
  };

  const response = await axios.post(
    `https://scanner.tradingview.com/brazil/scan`,
    formData,
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
  );

  const actualData: StocksProps[] = await response.data.data.map(
    (stock: any) => {
      return {
        logoid: stock.d[0],
        name: stock.d[1],
        close: stock.d[2],
        change: stock.d[3],
        volume: stock.d[4],
        market_cap_basic: stock.d[5],
        sector: stock.d[6],
      };
    },
  );

  return {
    props: {
      stocks: actualData,
    },
    revalidate: 60,
  };
}

const Quotes = ({ stocks }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>brapi - API de Ações da Bovespa</title>
      </Head>
      <Layout>
        <Header />
        <MainQuote stocks={stocks} />
      </Layout>
    </div>
  );
};

export default Quotes;
