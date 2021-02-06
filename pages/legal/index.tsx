import Head from 'next/head';
import React from 'react';
import MainLegal from '../../components/MainLegal';
import Header from '../../components/Header';
import Layout from '../../Layout';

const Legal: React.FC = () => {
  return (
    <div>
      <Head>
        <title>brapi - API de Ações da Bovespa</title>
      </Head>
      <Layout>
        <Header />
        <MainLegal />
      </Layout>
    </div>
  );
};

export default Legal;
