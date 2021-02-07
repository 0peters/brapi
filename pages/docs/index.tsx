import Head from 'next/head';
import React from 'react';
import Header from '../../components/Header';
import MainDocs from '../../components/MainDocs';
import Layout from '../../Layout';

const Docs: React.FC = () => {
  return (
    <div>
      <Head>
        <title>brapi - Documentação</title>
      </Head>
      <Layout>
        <Header />
        <MainDocs />
      </Layout>
    </div>
  );
};

export default Docs;
