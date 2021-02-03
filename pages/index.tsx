import Head from 'next/head';
import React from 'react';
// import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Layout from '../Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>brapi - API de Ações da Bovespa</title>
      </Head>
      <Layout>
        <Header />
        <Main />
        {/* <Footer /> */}
      </Layout>
    </div>
  );
}
