import axios from 'axios';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React from 'react';
import { QuoteProps } from '../../@types/QuoteProps';
import Header from '../../components/Header';
import MainQuoteSlug from '../../components/MainQuoteSlug';
import Layout from '../../Layout';

export interface StockProps {
  symbol: string;
  shortName: string;
  longName: string;
  currency: string;
  regularMarketPrice: number;
  regularMarketDayHigh: number;
  regularMarketDayLow: number;
  regularMarketDayRange: string;
  regularMarketChange: number;
  regularMarketChangePercent: number;
  regularMarketTime: Date;
  marketCap: number;
  regularMarketVolume: number;
  regularMarketPreviousClose: number;
  regularMarketOpen: number;
  averageDailyVolume10Day: number;
  averageDailyVolume3Month: number;
  fiftyTwoWeekLowChange: number;
  fiftyTwoWeekLowChangePercent: number;
  fiftyTwoWeekRange: string;
  fiftyTwoWeekHighChange: number;
  fiftyTwoWeekHighChangePercent: number;
  fiftyTwoWeekLow: number;
  fiftyTwoWeekHigh: number;
  twoHundredDayAverage: number;
  twoHundredDayAverageChange: number;
  twoHundredDayAverageChangePercent: number;
}

export async function getStaticPaths() {
  const formData = {
    filter: [
      {
        left: 'name',
        operation: 'nempty',
      },
      {
        left: 'sector',
        operation: 'equal',
        right: 'Miscellaneous',
      },
      {
        left: 'subtype',
        operation: 'nequal',
        right: 'preferred',
      },
    ],
    options: {
      lang: 'pt',
    },
    symbols: {
      query: {
        types: [],
      },
    },
    sort: {
      sortBy: 'name',
      sortOrder: 'asc',
    },
    range: [0, 100],
  };

  const response = await axios.post(
    `https://scanner.tradingview.com/brazil/scan`,
    formData,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );

  const paths: any = await response.data.data.map((stock: any) => {
    return {
      params: {
        slug: stock.s.replace('BMFBOVESPA:', ''),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  try {
    const response = await axios.get(
      `https://query1.finance.yahoo.com/v7/finance/options/${params.slug}.SA`,
    );

    const data: QuoteProps = await response.data.optionChain.result[0].quote;

    return {
      props: {
        stock: data,
      },
      revalidate: 60,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}

const Quotes = ({ stock }: any) => {
  return (
    <div>
      <Head>
        <title>brapi - Detalhes da {stock?.symbol || 'Ação'}</title>
      </Head>
      <Layout>
        <Header />
        <MainQuoteSlug stock={stock} />
      </Layout>
    </div>
  );
};

export default Quotes;
