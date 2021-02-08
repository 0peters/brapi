import Link from 'next/link';

import { Container } from './styles';

import codingImg from '../../assets/coding.svg';

const MainDocs = () => {
  return (
    <Container>
      <main>
        <section>
          <aside>
            <h1>Documentação</h1>
            <p>
              A nossa API foi desenvolvida para ser a mais fácil de se utilizar.
            </p>
          </aside>
          <aside>
            <div>
              <h2>Obter o preço de ações listadas no IBOVESPA</h2>
              <p>
                Com esse endpoint você consegue obter acesso ao preço de uma
                ação listada no IBOVESPA através do simbolo do título.
              </p>
              <p>
                <strong>Delay: </strong>
                Os dados podem estar atrasados em pelo menos 15 minutos, mas é
                possível verificar o horário que foi atualizado através do dado
                no <code>regularMarketTime</code>.
              </p>
              <p>
                <strong>
                  Títulos/Símbolos disponíveis:{' '}
                  <Link href="/docs/list">
                    <a target="_blank" rel="noopener noreferrer">
                      veja a lista
                    </a>
                  </Link>
                </strong>
              </p>
              <p>
                Os dados são obtidos a partir do símbolo da empresa como é
                possível ver abaixo:
                <br />
                <code>GET https://brapi.ga/api/quote/COGN3</code>
              </p>
            </div>

            <p>
              <details>
                <summary>
                  <strong>Estrutura da resposta:</strong>
                </summary>
                <ul>
                  <li>
                    <span>symbol</span>: símbolo da ação
                  </li>
                  <li>
                    <span>shortName</span>: Nome da empresa simplificado{' '}
                  </li>
                  <li>
                    <span>longName</span>: Nome da empresa{' '}
                  </li>
                  <li>
                    <span>currency</span>: Moeda base{' '}
                  </li>
                  <li>
                    <span>regularMarketPrice</span>: Preço por ação atual{' '}
                  </li>
                  <li>
                    <span>regularMarketDayHigh</span>: Maior preço por ação hoje
                  </li>
                  <li>
                    <span>regularMarketDayLow</span>: Menor preço por ação hoje
                  </li>
                  <li>
                    <span>regularMarketDayRange</span>: Menor e maior preço da
                    ação hoje
                  </li>
                  <li>
                    <span>regularMarketChange</span>: Variação do preço da ação
                    hoje
                  </li>
                  <li>
                    <span>regularMarketChangePercent</span>: Variação do preço
                    da ação hoje em porcentage
                  </li>
                  <li>
                    <span>regularMarketTime</span>: Horário que os dados foram
                    atualizados
                  </li>
                  <li>
                    <span>marketCap</span>: Capitalização da empresa
                  </li>
                  <li>
                    <span>regularMarketVolume</span>: Volume das trocas dessa
                    ação hoje
                  </li>
                  <li>
                    <span>regularMarketPreviousClose</span>: Preço da ação na
                    hora do fechamento do dia anterior
                  </li>
                  <li>
                    <span>regularMarketOpen</span>: Preço da ação na hora da
                    abertura de hoje{' '}
                  </li>
                  <li>
                    <span>averageDailyVolume10Day</span>: Média do volume das
                    trocas dessa ação nos últimos 10 dias
                  </li>
                  <li>
                    <span>averageDailyVolume3Month</span>: Média do volume das
                    trocas dessa ação nos últimos 3 meses
                  </li>
                  <li>
                    <span>fiftyTwoWeekLowChange</span>: Variação de queda nas
                    últimas 52 semanas
                  </li>
                  <li>
                    <span>fiftyTwoWeekLowChangePercent</span>: Variação de queda
                    nas últimas 52 semanas em porcentagem
                  </li>
                  <li>
                    <span>fiftyTwoWeekRange</span>: Menor e maior preço da ação
                    nas últimas 52 semanas
                  </li>
                  <li>
                    <span>fiftyTwoWeekHighChange</span>: Variação da alta nas
                    últimas 52 semanas
                  </li>
                  <li>
                    <span>fiftyTwoWeekHighChangePercent</span>: Variação da alta
                    nas últimas 52 semanas em porcentagem
                  </li>
                  <li>
                    <span>fiftyTwoWeekLow</span>: Menor preço da ação em 52
                    semanas
                  </li>
                  <li>
                    <span>fiftyTwoWeekHigh</span>: Maior preço da ação em 52
                    semanas
                  </li>
                  <li>
                    <span>twoHundredDayAverage</span>: Média do preço da ação em
                    200 dias
                  </li>
                  <li>
                    <span>twoHundredDayAverageChange</span>: Média da variação
                    do preço da ação em 200 dias
                  </li>
                  <li>
                    <span>twoHundredDayAverageChangePercent</span>: Média da
                    variação do preço da ação em 200 dias em porcentagem
                  </li>
                  <li>
                    <span>requestedAt</span>: Horário da sua requisição
                  </li>
                </ul>
              </details>
            </p>

            <p>
              <details>
                <summary>
                  <strong>
                    Exemplo de resposta JSON para o símbolo COGN3:
                  </strong>
                </summary>
                <pre>
                  <code>
                    {`{
  "results": {
    "symbol": "COGN3",
    "shortName": "COGNA ON    ON      NM",
    "longName": "Cogna Educação S.A.",
    "currency": "BRL",
    "regularMarketPrice": 4.63,
    "regularMarketDayHigh": 4.7,
    "regularMarketDayLow": 4.58,
    "regularMarketDayRange": "4.58 - 4.7",
    "regularMarketChange": 0.010000229,
    "regularMarketChangePercent": 0.21645518,
    "regularMarketTime": "2021-02-05T21:06:00.000Z",
    "marketCap": 8615874560,
    "regularMarketVolume": 29814400,
    "regularMarketPreviousClose": 4.62,
    "regularMarketOpen": 4.65,
    "averageDailyVolume10Day": 42852887,
    "averageDailyVolume3Month": 54733323,
    "fiftyTwoWeekLowChange": 1.0600002,
    "fiftyTwoWeekLowChangePercent": 0.2969188,
    "fiftyTwoWeekRange": "3.57 - 12.08",
    "fiftyTwoWeekHighChange": -7.45,
    "fiftyTwoWeekHighChangePercent": -0.61672187,
    "fiftyTwoWeekLow": 3.57,
    "fiftyTwoWeekHigh": 12.08,
    "twoHundredDayAverage": 5.499161,
    "twoHundredDayAverageChange": -0.86916065,
    "twoHundredDayAverageChangePercent": -0.15805332
  },
  "requestedAt": "2021-02-06T21:45:13.131Z"
}`}
                  </code>
                </pre>
              </details>
            </p>

            <p>
              <details>
                <summary>
                  <strong>Interface para Typescript: </strong>
                </summary>
                <pre>
                  <code>
                    {`declare module brapi {

export interface Results {
    symbol: string;
    shortName: string;
    longName: string;
    currency: string;
    regularMarketPrice: number;
    regularMarketDayHigh: number;
    regularMarketDayLow: number;
    regularMarketDayRange: string;
    regularMarketChange: number;
    regularMarketChangePercent: number;
    regularMarketTime: Date;
    marketCap: number;
    regularMarketVolume: number;
    regularMarketPreviousClose: number;
    regularMarketOpen: number;
    averageDailyVolume10Day: number;
    averageDailyVolume3Month: number;
    fiftyTwoWeekLowChange: number;
    fiftyTwoWeekLowChangePercent: number;
    fiftyTwoWeekRange: string;
    fiftyTwoWeekHighChange: number;
    fiftyTwoWeekHighChangePercent: number;
    fiftyTwoWeekLow: number;
    fiftyTwoWeekHigh: number;
    twoHundredDayAverage: number;
    twoHundredDayAverageChange: number;
    twoHundredDayAverageChangePercent: number;
}

export interface RootObject {
    results: Results;
    requestedAt: Date;
}

}

`}
                  </code>
                </pre>
              </details>
            </p>

            <div>
              <h2>Limitações</h2>
              <p>
                TUDO ILIMITADO. Bem, por enquanto, ainda estamos em versão
                Alpha. Estamos testandos os nossos limites então todas as
                requisições são ilimitadas, pode ser que vamos ter que limitar o
                número de requisições no futuro, mas por enquanto está tudo
                ilimitado. A primeira requisição pode demorar um pouco mais do
                que normal devido ao <i>cold start</i> da Vercel.
              </p>
            </div>
          </aside>
          <img src={codingImg} alt="Pessoas programando" />
        </section>
      </main>
    </Container>
  );
};

export default MainDocs;
