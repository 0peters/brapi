import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  numberToSI,
  numberToMoney,
  numberToPercent,
} from '../../utils/formatNumbers';

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

const MainQuote = ({
  stocks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
            <h2>
              Títulos/Símbolos disponíveis:
              <Link href="/docs/list">
                <a className="every-stock">veja a lista</a>
              </Link>
            </h2>
          </aside>
        </section>
        <section>
          {stocks &&
            stocks.map((stock) => (
              <Link href={`/quotes/${stock.name}`} key={stock.name}>
                <a aria-label={`Ação ${stock.name}`}>
                  <aside className="card">
                    <Image
                      src={
                        stock.logoid
                          ? `https://s3-symbol-logo.tradingview.com/${stock.logoid}.svg`
                          : brapiLogo
                      }
                      width="64"
                      height="64"
                      alt={stock.name}
                      title={stock.name}
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
                      <li title="Variação %">
                        <strong>variação</strong>
                        <p>{numberToPercent(stock.change)}</p>
                      </li>
                      <li title="Volume">
                        <strong>volume</strong>
                        <p>{numberToSI(stock.volume)}</p>
                      </li>
                      <li title="Capitalização de Mercado">
                        <strong>cap. mercado</strong>
                        <p>{numberToSI(stock.market_cap_basic)}</p>
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
