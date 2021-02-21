import Head from 'next/head';
import React from 'react';
import ComingSoon from '../../components/ComingSoon';
import Header from '../../components/Header';
import Layout from '../../Layout';
import SignUp from '../../components/SignUp';

const CreateAccount: React.FC = () => {
  return (
    <div>
      <Head>
        <title>brapi - Criar Conta</title>
      </Head>
      <Layout>
        <Header />
        <SignUp />
      </Layout>
    </div>
  );
};

export default CreateAccount;
