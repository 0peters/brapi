import axios from 'axios';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../../components/Header';
import Layout from '../../Layout';
import { Container } from '../../styles/docsStylesList';
import { numberToMoney } from '../../utils/formatNumbers';

import logoBrapi from '../../assets/logo/logo-brapi-no-background.svg';

export const getStaticProps = async () => {
  const formData = {
    filter: [
      {
        left: 'volume',
        operation: 'nempty',
      },
    ],
    options: {
      lang: 'pt',
      active_symbols_only: true,
    },
    symbols: {},
    columns: ['logoid', 'name', 'close'],
    sort: {
      sortBy: 'volume',
      sortOrder: 'desc',
    },
    range: [0, 2000],
  };

  const response = await axios.post(
    `https://scanner.tradingview.com/brazil/scan`,
    formData,
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
  );

  const paths = await response.data.data.map((stock: any) => {
    const workingStock = stock.s
      .replace('3F', '3')
      .replace('4F', '4')
      .replace('11F', '11')
      .replace('6F', '6')
      .replace('BMFBOVESPA:', '');

    const stockImg = stock.d[0]
      ? `https://s3-symbol-logo.tradingview.com/${stock.d[0]}.svg`
      : `${logoBrapi}`;

    return {
      slug: workingStock,
      img: stockImg,
      price: stock.d[2],
    };
  });

  return {
    props: {
      stocks: paths,
    },
    revalidate: 60,
  };
};

const Docs = ({ stocks }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>brapi - API de Ações da Bovespa</title>
      </Head>
      <Layout>
        <Header />
        <Container>
          <main>
            <article>
              {stocks.map((stock: any, index: number) => (
                <section key={index}>
                  <Link href={`/quotes/${stock.slug}`}>
                    <a>
                      <Image
                        src={stock.img}
                        alt={stock.slug}
                        width={48}
                        height={48}
                      />
                      <strong>{stock.slug}</strong>
                      <p title="Preço">{numberToMoney(stock.price)}</p>
                    </a>
                  </Link>
                </section>
              ))}
            </article>
          </main>
        </Container>
      </Layout>
    </div>
  );
};

export default Docs;
