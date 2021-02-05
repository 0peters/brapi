import Head from 'next/head';
import React from 'react';
import Header from '../../components/Header';
import MainQuote from '../../components/MainQuote';
import Layout from '../../Layout';

const Quotes = () => {
  return (
    <div>
      <Head>
        <title>brapi - API de Ações da Bovespa</title>
      </Head>
      <Layout>
        <Header />
        <MainQuote />
      </Layout>
    </div>
  );
};

export default Quotes;
