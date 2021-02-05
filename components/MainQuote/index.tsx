import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import brapiLogo from '../../assets/logo/logo-brapi-no-background.svg';

import { Container } from './styles';

interface StocksProps {
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

const MainQuote: React.FC = () => {
  const [stocks, setStocks] = useState<StocksProps[]>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const formData = {
      filter: [
        {
          left: 'volume',
          operation: 'nempty',
        },
        {
          left: 'type',
          operation: 'equal',
          right: 'stock',
        },
        {
          left: 'subtype',
          operation: 'equal',
          right: 'common',
        },
      ],
      options: {
        lang: 'pt',
        active_symbols_only: true,
      },
      symbols: {},
      columns: [
        'logoid',
        'name',
        'close',
        'change',
        'volume',
        'market_cap_basic',
        'sector',
      ],
      sort: {
        sortBy: 'volume',
        sortOrder: 'desc',
      },
      range: [0, 20],
    };

    const response = await axios.post(
      `https://scanner.tradingview.com/brazil/scan`,
      formData,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    );

    const actualData: StocksProps[] = response.data.data.map((stock: any) => {
      return {
        logoid: stock.d[0],
        name: stock.d[1],
        close: stock.d[2],
        change: stock.d[3],
        volume: stock.d[4],
        market_cap_basic: stock.d[5],
        sector: stock.d[6],
      };
    });

    setStocks(actualData);
  };

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
                <a>
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
          {console.log(stocks)}
        </section>
      </main>
    </Container>
  );
};

export default MainQuote;
