import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Header from '../../components/Header';
import Layout from '../../Layout';

import { Container } from '../../styles/contactStyles';

import contactImg from '../../assets/front-page/main-contact.svg';

const Contact: React.FC = () => {
  return (
    <div>
      <Head>
        <title>brapi - Contato</title>
      </Head>
      <Layout>
        <Header />
        <Container>
          <main>
            <section>
              <h1>Entre em Contato:</h1>
              <p>Encontrou algum problema ou tem alguma sugestão?</p>
              <ul>
                <li>
                  <Link href="https://github.com/alissonsleal/brapi">
                    <a target="_blank" rel="noopener noreferrer">
                      Github
                    </a>
                  </Link>
                </li>
                <li>
                  Email:{' '}
                  <Link href="mailto:brapi@protonmail.com">
                    <a target="_blank">brapi@protonmail.com</a>
                  </Link>
                </li>
              </ul>
            </section>
            <section>
              <img src={contactImg} alt="People talking on the phone" />
            </section>
          </main>
        </Container>
      </Layout>
    </div>
  );
};

export default Contact;
