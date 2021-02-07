import axios from 'axios';
import Link from 'next/link';
import React from 'react';

import brapiLogo from '../../assets/logo/logo-brapi-no-background.svg';
import { formatNumber, numberToMoney, numberToPercent } from '../../utils';

import { Container } from './styles';

export async function getStaticProps({ stock }: any) {
  const formData = {
    filter: [
      {
        left: 'name',
        operation: 'nempty',
      },
      {
        left: 'sector',
        operation: 'equal',
        right: 'Miscellaneous',
      },
      {
        left: 'subtype',
        operation: 'nequal',
        right: 'preferred',
      },
    ],
    options: {
      lang: 'pt',
    },
    symbols: {
      query: {
        types: [],
      },
    },
    sort: {
      sortBy: 'name',
      sortOrder: 'asc',
    },
    range: [0, 100],
  };

  const response = await axios.post(
    `https://scanner.tradingview.com/brazil/scan`,
    formData,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );

  console.log(stock);

  return {
    props: {
      stockData1: response.data[0].s,
    },
    revalidate: 60,
  };
}

const MainQuoteSlug = ({ stock }: any, { stockData1 }: any) => {
  return (
    <Container>
      {/* {stock && console.log(stock)} */}
      {/* {console.log(stockData1)} */}
      <main>
        <section>
          <aside>
            {stock && <h1>{`Informações sobre ${stock.longName}`}</h1>}
            <p>
              Veja a lista de ações com o maior volume de negociação facilmente.
              Os grandes volumes de negociação tendem a aparecer em estreita
              proximidade com fortes níveis de preços e pontos de pivô. Tais
              volumes são muitas vezes o resultado de uma grande quantidade de
              pedidos sendo preenchidos em certos níveis de preços quando os
              grandes players entram no mercado.
            </p>
          </aside>
        </section>
        <section>
          {stock && (
            <Link href={`/quotes/${stock.symbol}`} key={stock.symbol}>
              <a aria-label={`Ação ${stock.symbol}`}>
                <aside className="card">
                  <img
                    src={
                      stock.logoid
                        ? `https://s3-symbol-logo.tradingview.com/${stock.logoid}.svg`
                        : brapiLogo
                    }
                    alt={stock.name}
                    title={stock.name}
                  />
                  <ul>
                    <li>
                      <strong>ação</strong>
                      <p>{stock.symbol.replace('.SA', '')}</p>
                    </li>
                    <li>
                      <strong>preço</strong>
                      <p>{numberToMoney(stock.regularMarketPrice)}</p>
                    </li>
                    <li title="Variação %">
                      <strong>variação</strong>
                      <p>{numberToPercent(stock.regularMarketChangePercent)}</p>
                    </li>
                    <li title="Volume">
                      <strong>volume</strong>
                      <p>{formatNumber(stock.regularMarketVolume)}</p>
                    </li>
                    <li title="Capitalização de Mercado">
                      <strong>cap. mercado</strong>
                      <p>{formatNumber(stock.marketCap)}</p>
                    </li>
                  </ul>
                </aside>
              </a>
            </Link>
          )}
        </section>
      </main>
    </Container>
  );
};

export default MainQuoteSlug;
