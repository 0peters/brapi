import axios from 'axios';
import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';
import he from 'he';
import React from 'react';

import {
  numberToMoney,
  numberToPercent,
  numberToSI,
} from '../../utils/formatNumbers';

import { QuoteProps } from '../../@types/QuoteProps';
import Header from '../../components/Header';
import Layout from '../../Layout';

import { Container } from './styles';

export const getServerSidePaths = async () => {
  const response = await axios.post(
    'https://scanner.tradingview.com/brazil/scan',
  );

  const paths = await response.data.data
    .map((stock: any) => {
      const workingStock = stock.s
        .replace('3F', '3')
        .replace('4F', '4')
        .replace('11F', '11')
        .replace('6F', '6')
        .replace('BMFBOVESPA:', '');
      // console.log(workingStock);

      return { params: { slug: workingStock } };
    })
    .sort();

  // console.log(paths);

  return {
    paths,
    fallback: true,
  };
};

export const getServerSideProps = async ({ params }: any) => {
  const formDataTradingView = {
    symbols: {
      tickers: [`BMFBOVESPA:${params.slug.toUpperCase()}`],
      query: {
        types: [],
      },
    },
    columns: ['logoid'],
  };

  const responseTradingView = await axios.post(
    `https://scanner.tradingview.com/brazil/scan`,
    formDataTradingView,
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
  );

  const stockImg = (await responseTradingView.data.data[0].d[0])
    ? `https://s3-symbol-logo.tradingview.com/${await responseTradingView.data
        .data[0].d[0]}.svg`
    : `https://brapi.ga/favicon.svg`;

  const responseYahoo = await axios.get(
    `https://query1.finance.yahoo.com/v7/finance/options/${params.slug}.SA`,
  );

  const data: QuoteProps = responseYahoo.data.optionChain.result[0].quote;

  const quote = {
    symbol: params.slug.toString().toUpperCase() || null,
    stockImg: stockImg,
    shortName: data.shortName || null,
    longName: he.decode(data.longName) || null,
    currency: data.currency || null,
    regularMarketPrice: data.regularMarketPrice || null,
    regularMarketDayHigh: data.regularMarketDayHigh || null,
    regularMarketDayLow: data.regularMarketDayLow || null,
    regularMarketDayRange: data.regularMarketDayRange || null,
    regularMarketChange: data.regularMarketChange || null,
    regularMarketChangePercent: data.regularMarketChangePercent || null,
    regularMarketTime: data.regularMarketTime,
    marketCap: data.marketCap || null,
    regularMarketVolume: data.regularMarketVolume || null,
    regularMarketPreviousClose: data.regularMarketPreviousClose || null,
    regularMarketOpen: data.regularMarketOpen || null,
    averageDailyVolume10Day: data.averageDailyVolume10Day || null,
    averageDailyVolume3Month: data.averageDailyVolume3Month || null,
    fiftyTwoWeekLowChange: data.fiftyTwoWeekLowChange || null,
    fiftyTwoWeekLowChangePercent: data.fiftyTwoWeekLowChangePercent || null,
    fiftyTwoWeekRange: data.fiftyTwoWeekRange || null,
    fiftyTwoWeekHighChange: data.fiftyTwoWeekHighChange || null,
    fiftyTwoWeekHighChangePercent: data.fiftyTwoWeekHighChangePercent || null,
    fiftyTwoWeekLow: data.fiftyTwoWeekLow || null,
    fiftyTwoWeekHigh: data.fiftyTwoWeekHigh || null,
    twoHundredDayAverage: data.twoHundredDayAverage || null,
    twoHundredDayAverageChange: data.twoHundredDayAverageChange || null,
    twoHundredDayAverageChangePercent:
      data.twoHundredDayAverageChangePercent || null,
  };

  return {
    props: {
      stock: quote,
    },
  };
};

const Quotes = ({
  stock,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!stock) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      <Head>
        <title>brapi - Detalhes da {stock.shortName}</title>
      </Head>
      <Layout>
        <Header />
        <Container>
          <main>
            <section>
              <aside>
                <img src={stock.stockImg} width="64" height="64" />
                <h1>
                  {stock.longName} ({stock.symbol})
                </h1>
              </aside>
            </section>
            <section>
              <span>
                <strong>Preço</strong>
                <p>{numberToMoney(stock.regularMarketPrice)}</p>
              </span>
              <span>
                <strong>Alta (24h)</strong>
                <p>{numberToMoney(stock.regularMarketDayHigh)}</p>
              </span>
              <span>
                <strong>Baixa (24h)</strong>
                <p>{numberToMoney(stock.regularMarketDayLow)}</p>
              </span>
              <span>
                <strong>Variação (24h)</strong>
                <p>{numberToMoney(stock.regularMarketChange)}</p>
              </span>
              <span>
                <strong>Variação % (24h)</strong>
                <p>{numberToPercent(stock.regularMarketChangePercent)}</p>
              </span>
            </section>
            <section>
              <span>
                <strong>Cap. Mercado</strong>
                <p>{numberToSI(stock.regularMarketVolume)}</p>
              </span>
              <span>
                <strong>Preço Ontem</strong>
                <p>{numberToMoney(stock.regularMarketPreviousClose)}</p>
              </span>
              <span>
                <strong>Abertura Hoje</strong>
                <p>{numberToMoney(stock.regularMarketOpen)}</p>
              </span>
              <span>
                <strong>
                  Méd. Volume <i>(10 dias)</i>
                </strong>
                <p>{numberToSI(stock.averageDailyVolume10Day)}</p>
              </span>
              <span>
                <strong>
                  Méd. Volume <i>(3 meses)</i>
                </strong>
                <p>{numberToSI(stock.averageDailyVolume3Month)}</p>
              </span>
            </section>
            <section>
              <span>
                <strong>
                  Menor Preço <i>(52 semanas)</i>
                </strong>
                <p>{numberToMoney(stock.fiftyTwoWeekLow)}</p>
              </span>
              <span>
                <strong>
                  Maior Preço <i>(52 semanas)</i>
                </strong>
                <p>{numberToMoney(stock.fiftyTwoWeekHigh)}</p>
              </span>
              <span>
                <strong>
                  Média Preço <i>(200 dias)</i>
                </strong>
                <p>{numberToMoney(stock.twoHundredDayAverage)}</p>
              </span>
              <span>
                <strong>
                  Méd. Variação Preço <i>(200 dias)</i>
                </strong>
                <p>{numberToPercent(stock.twoHundredDayAverageChange)}</p>
              </span>
              <span>
                <strong>
                  Méd. Variação % <i>(200 dias)</i>
                </strong>
                <p>
                  {numberToPercent(stock.twoHundredDayAverageChangePercent)}
                </p>
              </span>
            </section>
            <i className="bottom-right">
              Atualizado às:{' '}
              {new Date(stock.regularMarketTime * 1000)
                .toLocaleTimeString()
                .toString()}
            </i>
          </main>
        </Container>
      </Layout>
    </div>
  );
};

export default Quotes;
