import Head from 'next/head';
import React from 'react';
import Header from '../../components/Header';
import Layout from '../../Layout';

const Docs: React.FC = () => {
  return (
    <div>
      <Head>
        <title>brapi - API de Ações da Bovespa</title>
      </Head>
      <Layout>
        <Header />
        <p>list page</p>
      </Layout>
    </div>
  );
};

export default Docs;
