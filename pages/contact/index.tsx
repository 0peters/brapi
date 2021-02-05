import Head from 'next/head';
import React from 'react';
import ComingSoon from '../../components/ComingSoon';
import Header from '../../components/Header';
import Layout from '../../Layout';

const Contact: React.FC = () => {
  return (
    <div>
      <Head>
        <title>brapi - API de Ações da Bovespa</title>
      </Head>
      <Layout>
        <Header />
        <ComingSoon />
      </Layout>
    </div>
  );
};

export default Contact;
