import Head from 'next/head';
import React from 'react';
import Header from '../../components/Header';
import Layout from '../../Layout';

const Quotes = ({ slug }: any) => {
  return (
    <div>
      <Head>
        <title>brapi - Detalhes da {slug || 'Ação'}</title>
      </Head>
      <Layout>
        <Header />
        <h1>{slug || 'Ação'}</h1>
      </Layout>
    </div>
  );
};

export default Quotes;
