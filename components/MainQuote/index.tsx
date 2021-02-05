import axios from 'axios';
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import brapiLogo from '../../assets/logo/logo-brapi-no-background.svg';
import { getStaticProps } from '../../pages/quotes';

import { Container } from './styles';

export interface StocksProps {
  logoid: string;
  name: string;
  close: number;
  change: number;
  volume: number;
  market_cap_basic: number;
  sector: string;
}

function formatNumber(number: number) {
  var SI_SYMBOL = ['', 'k', 'M', 'B', 'T'];

  var tier = (Math.log10(Math.abs(number)) / 3) | 0;

  if (tier == 0) return number;

  var suffix = SI_SYMBOL[tier];
  var scale = Math.pow(10, tier * 3);

  var scaled = number / scale;

  return scaled.toFixed(1) + suffix;
}

const numberToMoney = (number: number) => {
  let money = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return money.format(number);
};

const numberToPercent = (number: number) => {
  let percent = new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    maximumSignificantDigits: 2,
  });

  return percent.format(number / 100);
};

const MainQuote = ({
  stocks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const [stocks, setStocks] = useState<StocksProps[]>();

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <Container>
      <main>
        <section>
          <aside>
            <h1>Ações Mais Negociadas</h1>
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
          {stocks &&
            stocks.map((stock) => (
              <Link href={`/quotes/${stock.name}`}>
                <a key={stock.name} aria-label={`Ação ${stock.name}`}>
                  <aside className="card">
                    <img
                      src={
                        stock.logoid
                          ? `https://s3-symbol-logo.tradingview.com/${stock.logoid}.svg`
                          : brapiLogo
                      }
                      alt={stock.name}
                    />
                    <ul>
                      <li>
                        <strong>ação</strong>
                        <p>{stock.name}</p>
                      </li>
                      <li>
                        <strong>preço</strong>
                        <p>{numberToMoney(stock.close)}</p>
                      </li>
                      <li>
                        <strong>variação</strong>
                        <p>{numberToPercent(stock.change)}</p>
                      </li>
                      <li>
                        <strong>volume</strong>
                        <p>{formatNumber(stock.volume)}</p>
                      </li>
                      <li>
                        <strong>cap. mercado</strong>
                        <p>{formatNumber(stock.market_cap_basic)}</p>
                      </li>
                    </ul>
                  </aside>
                </a>
              </Link>
            ))}
        </section>
      </main>
    </Container>
  );
};

export default MainQuote;
