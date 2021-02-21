import Head from 'next/head';
import React from 'react';
import Header from '../../components/Header';
import SignUp from '../../components/SignUp';
import Layout from '../../Layout';

const login: React.FC = () => {
  return (
    <div>
      <Head>
        <title>brapi - Entrar na sua conta</title>
      </Head>
      <Layout>
        <Header />
        <SignUp />
      </Layout>
    </div>
  );
};

export default login;
