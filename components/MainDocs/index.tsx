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
              <h2>Obter o preço de ações listadas no BOVESPA</h2>
              <p>
                Com esse endpoint você consegue obter acesso ao preço de uma
                ação listada no BOVESPA através do simbolo do título.
              </p>
              <p>
                <strong>Delay: </strong>
                Os dados podem estar atrasados em pelo menos 15 minutos, mas é
                possível verificar o horário que foi atualizado através do dado
                no <code>regularMarketTime</code>.
              </p>

              <br />
              <br />

              <p>
                A forma mais fácil de entender essa API é através da nossa
                Collection no Postman que pode ser acessada aqui:{' '}
                <a
                  href="https://www.getpostman.com/collections/da5f72c67bf46c6c4a5f"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.getpostman.com/collections/da5f72c67bf46c6c4a5f
                </a>
              </p>

              <p>
                Também temos o swagger com OpenAPI 3.0:{' '}
                <a
                  href="https://app.swaggerhub.com/apis-docs/Alissonsleal/brapi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://app.swaggerhub.com/apis-docs/Alissonsleal/brapi
                </a>
              </p>

              <br />
              <br />

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
              </p>

              <p>
                <strong>Exemplo de uma Requisição: </strong>
                <a
                  href="/api/quote/COGN3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <code className="code-get">
                    GET https://brapi.ga/api/quote/COGN3
                  </code>
                </a>
              </p>

              <p>
                <strong>Exemplo de uma Requisição em Grupo: </strong>
                <a
                  href="/api/quote/COGN3,MGLU3,VVAR3,OIBR3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <code className="code-get">
                    GET https://brapi.ga/api/quote/COGN3,MGLU3,VVAR3,OIBR3
                  </code>
                </a>
              </p>

              <p>
                <strong>
                  Exemplo de uma Requisição com dados fundamentalistas:{' '}
                </strong>
                <a
                  href="/api/quote/COGN3?fundamental=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <code className="code-get">
                    GET https://brapi.ga/api/quote/COGN3?fundamental=true
                  </code>
                </a>
              </p>

              <p>
                <strong>
                  Exemplo de uma Requisição com dados históricos:{' '}
                </strong>
                <a
                  href="/api/quote/COGN3?interval=1d&range=1mo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <code className="code-get">
                    GET https://brapi.ga/api/quote/COGN3?interval=1d&range=1mo
                  </code>
                </a>
              </p>

              <p>
                <strong>
                  Exemplo de uma Requisição em grupo com dados históricos:{' '}
                </strong>
                <a
                  href="/api/quote/COGN3,MGLU3,VVAR3,OIBR3?interval=1d&range=1mo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <code className="code-get">
                    GET
                    https://brapi.ga/api/quote/COGN3,MGLU3,VVAR3,OIBR3?interval=1d&range=1mo
                  </code>
                </a>
              </p>
              <p>
                <strong>
                  Exemplo de uma Requisição para pesquisar ações:{' '}
                </strong>
                <a
                  href="/api/available?search=CO"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <code className="code-get">
                    GET https://brapi.ga/api/available?search=CO
                  </code>
                </a>
              </p>
              <p>
                <strong>
                  Exemplo de uma Requisição para pesquisar criptomoedas:{' '}
                </strong>
                <a
                  href="/api/v2/crypto?coin=BTC,ETH&currency=BRL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <code className="code-get">
                    GET https://brapi.ga/api/v2/crypto?coin=BTC,ETH&currency=BRL
                  </code>
                </a>
              </p>
              <p>
                <strong>
                  Exemplo de uma Requisição para listar criptomoedas:{' '}
                </strong>
                <a
                  href="/api/v2/crypto/available?search=BT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <code className="code-get">
                    GET https://brapi.ga/api/v2/crypto/available?search=BT
                  </code>
                </a>
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
                  <br />
                  Com Dados Históricos:
                  <li>
                    <span>historicalDataPrice</span>: Dados Históricos
                  </li>
                  <ul>
                    <li>
                      <span>date</span>: Horário em que os dados foram
                      atualizados
                    </li>
                    <li>
                      <span>open</span>: Preço da ação na hora da abertura
                      daquele dia
                    </li>
                    <li>
                      <span>high</span>: Maior preço por ação daquele dia
                    </li>
                    <li>
                      <span>low</span>: Menor preço por ação daquele dia
                    </li>
                    <li>
                      <span>close</span>: Preço da ação na hora do fechamento
                      daquele dia
                    </li>
                    <li>
                      <span>volume</span>: Volume das trocas dessa ação daquele
                      dia
                    </li>
                  </ul>
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
                    {`
// GET https://brapi.ga/api/quote/COGN3

{
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
                  <strong>
                    Exemplo de resposta JSON para o símbolo COGN3 com dados
                    históricos (interval=1d, range=1mo):
                  </strong>
                </summary>
                <p>
                  <strong>Valores aceitos para "range" e "interval": </strong>
                  "1d", "5d", "1mo", "3mo", "6mo", "1y", "2y", "5y", "10y",
                  "ytd", "max"
                </p>
                <pre>
                  <code>
                    {`
// GET https://brapi.ga/api/quote/COGN3?interval=1d&range=1mo

{
  "results": [
    {
      "symbol": "COGN3",
      "shortName": "COGNA ON    ON      NM",
      "longName": "Cogna Educação S.A.",
      "currency": "BRL",
      "regularMarketPrice": 3.58,
      "regularMarketDayHigh": 3.6,
      "regularMarketDayLow": 3.42,
      "regularMarketDayRange": "3.42 - 3.6",
      "regularMarketChange": -0.029999971,
      "regularMarketChangePercent": -0.83102417,
      "regularMarketTime": "2021-03-02T19:50:44.000Z",
      "marketCap": 6602629632,
      "regularMarketVolume": 77939000,
      "regularMarketPreviousClose": 3.61,
      "regularMarketOpen": 3.59,
      "averageDailyVolume10Day": 60814366,
      "averageDailyVolume3Month": 52019854,
      "fiftyTwoWeekLowChange": 0.15999985,
      "fiftyTwoWeekLowChangePercent": 0.04678358,
      "fiftyTwoWeekRange": "3.42 - 10.79",
      "fiftyTwoWeekHighChange": -7.21,
      "fiftyTwoWeekHighChangePercent": -0.66821134,
      "fiftyTwoWeekLow": 3.42,
      "fiftyTwoWeekHigh": 10.79,
      "twoHundredDayAverage": 5.0040846,
      "twoHundredDayAverageChange": -1.4240847,
      "twoHundredDayAverageChangePercent": -0.28458446,
      "validRanges": [
        "1d",
        "5d",
        "1mo",
        "3mo",
        "6mo",
        "1y",
        "2y",
        "5y",
        "10y",
        "ytd",
        "max"
      ],
      "historicalDataPrice": [
        {
          "date": 1612267200,
          "open": 4.599999904632568,
          "high": 4.769999980926514,
          "low": 4.599999904632568,
          "close": 4.650000095367432,
          "volume": 41722400
        },
        {
          "date": 1612353600,
          "open": 4.679999828338623,
          "high": 4.760000228881836,
          "low": 4.630000114440918,
          "close": 4.739999771118164,
          "volume": 30921100
        },
        {
          "date": 1612440000,
          "open": 4.75,
          "high": 4.760000228881836,
          "low": 4.579999923706055,
          "close": 4.619999885559082,
          "volume": 31580900
        },
        {
          "date": 1612526400,
          "open": 4.650000095367432,
          "high": 4.699999809265137,
          "low": 4.579999923706055,
          "close": 4.630000114440918,
          "volume": 29956200
        },
        {
          "date": 1612785600,
          "open": 4.639999866485596,
          "high": 4.639999866485596,
          "low": 4.460000038146973,
          "close": 4.46999979019165,
          "volume": 49741600
        },
        {
          "date": 1612872000,
          "open": 4.46999979019165,
          "high": 4.46999979019165,
          "low": 4.360000133514404,
          "close": 4.420000076293945,
          "volume": 36558300
        },
        {
          "date": 1612958400,
          "open": 4.420000076293945,
          "high": 4.429999828338623,
          "low": 4.239999771118164,
          "close": 4.239999771118164,
          "volume": 52695900
        },
        {
          "date": 1613044800,
          "open": 4.239999771118164,
          "high": 4.309999942779541,
          "low": 4.199999809265137,
          "close": 4.230000019073486,
          "volume": 39933900
        },
        {
          "date": 1613131200,
          "open": 4.199999809265137,
          "high": 4.21999979019165,
          "low": 4.130000114440918,
          "close": 4.190000057220459,
          "volume": 35272200
        },
        {
          "date": 1613574000,
          "open": null,
          "high": null,
          "low": null,
          "close": null,
          "volume": null
        },
        {
          "date": 1613649600,
          "open": 4.369999885559082,
          "high": 4.389999866485596,
          "low": 4.199999809265137,
          "close": 4.199999809265137,
          "volume": 46707300
        },
        {
          "date": 1613736000,
          "open": 4.190000057220459,
          "high": 4.25,
          "low": 4.139999866485596,
          "close": 4.179999828338623,
          "volume": 36495600
        },
        {
          "date": 1613998800,
          "open": 4.059999942779541,
          "high": 4.119999885559082,
          "low": 3.9600000381469727,
          "close": 3.9800000190734863,
          "volume": 59723700
        },
        {
          "date": 1614085200,
          "open": 4.099999904632568,
          "high": 4.110000133514404,
          "low": 3.950000047683716,
          "close": 3.9600000381469727,
          "volume": 46527400
        },
        {
          "date": 1614171600,
          "open": 3.9800000190734863,
          "high": 3.990000009536743,
          "low": 3.8499999046325684,
          "close": 3.9000000953674316,
          "volume": 75620100
        },
        {
          "date": 1614258000,
          "open": 3.9000000953674316,
          "high": 4.079999923706055,
          "low": 3.819999933242798,
          "close": 3.8399999141693115,
          "volume": 73599000
        },
        {
          "date": 1614344400,
          "open": 3.869999885559082,
          "high": 3.9000000953674316,
          "low": 3.740000009536743,
          "close": 3.740000009536743,
          "volume": 52220800
        },
        {
          "date": 1614603600,
          "open": 3.7899999618530273,
          "high": 3.809999942779541,
          "low": 3.5999999046325684,
          "close": 3.609999895095825,
          "volume": 57195200
        },
        {
          "date": 1614714644,
          "open": 3.5899999141693115,
          "high": 3.5999999046325684,
          "low": 3.4200000762939453,
          "close": 3.5799999237060547,
          "volume": 77939000
        }
      ]
    }
  ],
  "requestedAt": "2021-03-02T20:05:49.554Z"
}`}
                  </code>
                </pre>
              </details>
            </p>

            <p>
              <details>
                <summary>
                  <strong>
                    Exemplo de resposta JSON para os símbolos COGN3, MGLU3,
                    VVAR3 e OIBR3 com dados históricos (interval=1d, range=1mo):
                  </strong>
                </summary>
                <p>
                  <strong>Valores aceitos para "range" e "interval": </strong>
                  "1d", "5d", "1mo", "3mo", "6mo", "1y", "2y", "5y", "10y",
                  "ytd", "max"
                </p>
                <pre>
                  <code>
                    {`
// GET https://brapi.ga/api/quote/COGN3,MGLU3,VVAR3,OIBR3?interval=1d&range=1mo

{
"results": [
  {
    "symbol": "COGN3",
    "shortName": "COGNA ON    ON      NM",
    "longName": "Cogna Educação S.A.",
    "currency": "BRL",
    "regularMarketPrice": 3.6,
    "regularMarketDayHigh": 3.61,
    "regularMarketDayLow": 3.42,
    "regularMarketDayRange": "3.42 - 3.61",
    "regularMarketChange": -0.00999999,
    "regularMarketChangePercent": -0.27700806,
    "regularMarketTime": "2021-03-02T19:59:42.000Z",
    "marketCap": 6639515648,
    "regularMarketVolume": 79725300,
    "regularMarketPreviousClose": 3.61,
    "regularMarketOpen": 3.59,
    "averageDailyVolume10Day": 60814366,
    "averageDailyVolume3Month": 52019854,
    "fiftyTwoWeekLowChange": 0.17999983,
    "fiftyTwoWeekLowChangePercent": 0.052631527,
    "fiftyTwoWeekRange": "3.42 - 10.79",
    "fiftyTwoWeekHighChange": -7.19,
    "fiftyTwoWeekHighChangePercent": -0.66635776,
    "fiftyTwoWeekLow": 3.42,
    "fiftyTwoWeekHigh": 10.79,
    "twoHundredDayAverage": 5.0040846,
    "twoHundredDayAverageChange": -1.4040847,
    "twoHundredDayAverageChangePercent": -0.28058773,
    "validRanges": [
      "1d",
      "5d",
      "1mo",
      "3mo",
      "6mo",
      "1y",
      "2y",
      "5y",
      "10y",
      "ytd",
      "max"
    ],
    "historicalDataPrice": [
      {
        "date": 1612267200,
        "open": 4.599999904632568,
        "high": 4.769999980926514,
        "low": 4.599999904632568,
        "close": 4.650000095367432,
        "volume": 41722400
      },
      {
        "date": 1612353600,
        "open": 4.679999828338623,
        "high": 4.760000228881836,
        "low": 4.630000114440918,
        "close": 4.739999771118164,
        "volume": 30921100
      },
      {
        "date": 1612440000,
        "open": 4.75,
        "high": 4.760000228881836,
        "low": 4.579999923706055,
        "close": 4.619999885559082,
        "volume": 31580900
      },
      {
        "date": 1612526400,
        "open": 4.650000095367432,
        "high": 4.699999809265137,
        "low": 4.579999923706055,
        "close": 4.630000114440918,
        "volume": 29956200
      },
      {
        "date": 1612785600,
        "open": 4.639999866485596,
        "high": 4.639999866485596,
        "low": 4.460000038146973,
        "close": 4.46999979019165,
        "volume": 49741600
      },
      {
        "date": 1612872000,
        "open": 4.46999979019165,
        "high": 4.46999979019165,
        "low": 4.360000133514404,
        "close": 4.420000076293945,
        "volume": 36558300
      },
      {
        "date": 1612958400,
        "open": 4.420000076293945,
        "high": 4.429999828338623,
        "low": 4.239999771118164,
        "close": 4.239999771118164,
        "volume": 52695900
      },
      {
        "date": 1613044800,
        "open": 4.239999771118164,
        "high": 4.309999942779541,
        "low": 4.199999809265137,
        "close": 4.230000019073486,
        "volume": 39933900
      },
      {
        "date": 1613131200,
        "open": 4.199999809265137,
        "high": 4.21999979019165,
        "low": 4.130000114440918,
        "close": 4.190000057220459,
        "volume": 35272200
      },
      {
        "date": 1613574000,
        "open": null,
        "high": null,
        "low": null,
        "close": null,
        "volume": null
      },
      {
        "date": 1613649600,
        "open": 4.369999885559082,
        "high": 4.389999866485596,
        "low": 4.199999809265137,
        "close": 4.199999809265137,
        "volume": 46707300
      },
      {
        "date": 1613736000,
        "open": 4.190000057220459,
        "high": 4.25,
        "low": 4.139999866485596,
        "close": 4.179999828338623,
        "volume": 36495600
      },
      {
        "date": 1613998800,
        "open": 4.059999942779541,
        "high": 4.119999885559082,
        "low": 3.9600000381469727,
        "close": 3.9800000190734863,
        "volume": 59723700
      },
      {
        "date": 1614085200,
        "open": 4.099999904632568,
        "high": 4.110000133514404,
        "low": 3.950000047683716,
        "close": 3.9600000381469727,
        "volume": 46527400
      },
      {
        "date": 1614171600,
        "open": 3.9800000190734863,
        "high": 3.990000009536743,
        "low": 3.8499999046325684,
        "close": 3.9000000953674316,
        "volume": 75620100
      },
      {
        "date": 1614258000,
        "open": 3.9000000953674316,
        "high": 4.079999923706055,
        "low": 3.819999933242798,
        "close": 3.8399999141693115,
        "volume": 73599000
      },
      {
        "date": 1614344400,
        "open": 3.869999885559082,
        "high": 3.9000000953674316,
        "low": 3.740000009536743,
        "close": 3.740000009536743,
        "volume": 52220800
      },
      {
        "date": 1614603600,
        "open": 3.7899999618530273,
        "high": 3.809999942779541,
        "low": 3.5999999046325684,
        "close": 3.609999895095825,
        "volume": 57195200
      },
      {
        "date": 1614715182,
        "open": 3.5899999141693115,
        "high": 3.609999895095825,
        "low": 3.4200000762939453,
        "close": 3.5999999046325684,
        "volume": 79725300
      }
    ]
  },
  {
    "symbol": "MGLU3",
    "shortName": "MAGAZ LUIZA ON      NM",
    "longName": "Magazine Luiza S.A.",
    "currency": "BRL",
    "regularMarketPrice": 24.43,
    "regularMarketDayHigh": 24.6,
    "regularMarketDayLow": 23.59,
    "regularMarketDayRange": "23.59 - 24.6",
    "regularMarketChange": -0.11999893,
    "regularMarketChangePercent": -0.48879403,
    "regularMarketTime": "2021-03-02T19:59:41.000Z",
    "marketCap": 156679372800,
    "regularMarketVolume": 29492000,
    "regularMarketPreviousClose": 24.55,
    "regularMarketOpen": 24.29,
    "averageDailyVolume10Day": 41417383,
    "averageDailyVolume3Month": 31153089,
    "fiftyTwoWeekLowChange": 18.18,
    "fiftyTwoWeekLowChangePercent": 2.9088001,
    "fiftyTwoWeekRange": "6.25 - 28.31",
    "fiftyTwoWeekHighChange": -3.8799992,
    "fiftyTwoWeekHighChangePercent": -0.13705401,
    "fiftyTwoWeekLow": 6.25,
    "fiftyTwoWeekHigh": 28.31,
    "twoHundredDayAverage": 24.172165,
    "twoHundredDayAverageChange": 0.2578354,
    "twoHundredDayAverageChangePercent": 0.010666624,
    "validRanges": [
      "1d",
      "5d",
      "1mo",
      "3mo",
      "6mo",
      "1y",
      "2y",
      "5y",
      "10y",
      "ytd",
      "max"
    ],
    "historicalDataPrice": [
      {
        "date": 1612267200,
        "open": 25.299999237060547,
        "high": 25.729999542236328,
        "low": 25.200000762939453,
        "close": 25.299999237060547,
        "volume": 27563200
      },
      {
        "date": 1612353600,
        "open": 25.440000534057617,
        "high": 25.770000457763672,
        "low": 25.040000915527344,
        "close": 25.649999618530273,
        "volume": 20963300
      },
      {
        "date": 1612440000,
        "open": 25.639999389648438,
        "high": 26.200000762939453,
        "low": 25.15999984741211,
        "close": 25.309999465942383,
        "volume": 19706400
      },
      {
        "date": 1612526400,
        "open": 25.3799991607666,
        "high": 26.09000015258789,
        "low": 25.3799991607666,
        "close": 25.850000381469727,
        "volume": 24918700
      },
      {
        "date": 1612785600,
        "open": 25.850000381469727,
        "high": 26.399999618530273,
        "low": 25.520000457763672,
        "close": 26.15999984741211,
        "volume": 25773300
      },
      {
        "date": 1612872000,
        "open": 26.15999984741211,
        "high": 26.450000762939453,
        "low": 25.899999618530273,
        "close": 26.239999771118164,
        "volume": 19348100
      },
      {
        "date": 1612958400,
        "open": 26.100000381469727,
        "high": 26.1200008392334,
        "low": 25.110000610351562,
        "close": 25.299999237060547,
        "volume": 40037100
      },
      {
        "date": 1613044800,
        "open": 25.299999237060547,
        "high": 25.950000762939453,
        "low": 25.299999237060547,
        "close": 25.649999618530273,
        "volume": 20569900
      },
      {
        "date": 1613131200,
        "open": 25.520000457763672,
        "high": 25.979999542236328,
        "low": 25.350000381469727,
        "close": 25.90999984741211,
        "volume": 15132400
      },
      {
        "date": 1613574000,
        "open": null,
        "high": null,
        "low": null,
        "close": null,
        "volume": null
      },
      {
        "date": 1613649600,
        "open": 25.5,
        "high": 25.59000015258789,
        "low": 24.799999237060547,
        "close": 25.040000915527344,
        "volume": 22577800
      },
      {
        "date": 1613736000,
        "open": 24.920000076293945,
        "high": 25.389999389648438,
        "low": 24.190000534057617,
        "close": 24.940000534057617,
        "volume": 38672200
      },
      {
        "date": 1613998800,
        "open": 24.229999542236328,
        "high": 24.520000457763672,
        "low": 23.65999984741211,
        "close": 24.25,
        "volume": 41412400
      },
      {
        "date": 1614085200,
        "open": 24.299999237060547,
        "high": 25.079999923706055,
        "low": 23.850000381469727,
        "close": 24.860000610351562,
        "volume": 43889700
      },
      {
        "date": 1614171600,
        "open": 24.93000030517578,
        "high": 25.100000381469727,
        "low": 24.200000762939453,
        "close": 24.639999389648438,
        "volume": 37411000
      },
      {
        "date": 1614258000,
        "open": 24.59000015258789,
        "high": 25.020000457763672,
        "low": 23.809999465942383,
        "close": 24.049999237060547,
        "volume": 57969900
      },
      {
        "date": 1614344400,
        "open": 24.079999923706055,
        "high": 24.959999084472656,
        "low": 23.979999542236328,
        "close": 24.18000030517578,
        "volume": 45690100
      },
      {
        "date": 1614603600,
        "open": 24.559999465942383,
        "high": 25,
        "low": 24.170000076293945,
        "close": 24.549999237060547,
        "volume": 22131200
      },
      {
        "date": 1614715181,
        "open": 24.290000915527344,
        "high": 24.600000381469727,
        "low": 23.59000015258789,
        "close": 24.43000030517578,
        "volume": 29492000
      }
    ]
  },
  {
    "symbol": "VVAR3",
    "shortName": "VIAVAREJO   ON      NM",
    "longName": "Via Varejo S.A.",
    "currency": "BRL",
    "regularMarketPrice": 11.98,
    "regularMarketDayHigh": 12.07,
    "regularMarketDayLow": 11.19,
    "regularMarketDayRange": "11.19 - 12.07",
    "regularMarketChange": -0.13000011,
    "regularMarketChangePercent": -1.073494,
    "regularMarketTime": "2021-03-02T19:59:42.000Z",
    "marketCap": 19052271616,
    "regularMarketVolume": 76153800,
    "regularMarketPreviousClose": 12.11,
    "regularMarketOpen": 11.95,
    "averageDailyVolume10Day": 57291150,
    "averageDailyVolume3Month": 42380574,
    "fiftyTwoWeekLowChange": 8.0199995,
    "fiftyTwoWeekLowChangePercent": 2.0252523,
    "fiftyTwoWeekRange": "3.96 - 22.36",
    "fiftyTwoWeekHighChange": -10.380001,
    "fiftyTwoWeekHighChangePercent": -0.46422186,
    "fiftyTwoWeekLow": 3.96,
    "fiftyTwoWeekHigh": 22.36,
    "twoHundredDayAverage": 17.092394,
    "twoHundredDayAverageChange": -5.1123943,
    "twoHundredDayAverageChangePercent": -0.29910347,
    "validRanges": [
      "1d",
      "5d",
      "1mo",
      "3mo",
      "6mo",
      "1y",
      "2y",
      "5y",
      "10y",
      "ytd",
      "max"
    ],
    "historicalDataPrice": [
      {
        "date": 1612267200,
        "open": 14.5,
        "high": 15.390000343322754,
        "low": 14.5,
        "close": 15.279999732971191,
        "volume": 66421100
      },
      {
        "date": 1612353600,
        "open": 15.399999618530273,
        "high": 15.479999542236328,
        "low": 14.9399995803833,
        "close": 15.079999923706055,
        "volume": 43533700
      },
      {
        "date": 1612440000,
        "open": 15.100000381469727,
        "high": 15.449999809265137,
        "low": 14.869999885559082,
        "close": 15,
        "volume": 38573500
      },
      {
        "date": 1612526400,
        "open": 15.119999885559082,
        "high": 15.199999809265137,
        "low": 14.899999618530273,
        "close": 15.079999923706055,
        "volume": 28331300
      },
      {
        "date": 1612785600,
        "open": 15.149999618530273,
        "high": 15.3100004196167,
        "low": 14.970000267028809,
        "close": 15.220000267028809,
        "volume": 29991600
      },
      {
        "date": 1612872000,
        "open": 15.15999984741211,
        "high": 15.470000267028809,
        "low": 14.880000114440918,
        "close": 14.930000305175781,
        "volume": 32861700
      },
      {
        "date": 1612958400,
        "open": 14.9399995803833,
        "high": 14.970000267028809,
        "low": 14.289999961853027,
        "close": 14.350000381469727,
        "volume": 44553700
      },
      {
        "date": 1613044800,
        "open": 14.350000381469727,
        "high": 14.789999961853027,
        "low": 14.350000381469727,
        "close": 14.600000381469727,
        "volume": 34604100
      },
      {
        "date": 1613131200,
        "open": 14.460000038146973,
        "high": 14.619999885559082,
        "low": 14.279999732971191,
        "close": 14.479999542236328,
        "volume": 23298500
      },
      {
        "date": 1613574000,
        "open": null,
        "high": null,
        "low": null,
        "close": null,
        "volume": null
      },
      {
        "date": 1613649600,
        "open": 14.520000457763672,
        "high": 14.850000381469727,
        "low": 14.3100004196167,
        "close": 14.489999771118164,
        "volume": 30153100
      },
      {
        "date": 1613736000,
        "open": 14.4399995803833,
        "high": 14.619999885559082,
        "low": 14,
        "close": 14,
        "volume": 41836400
      },
      {
        "date": 1613998800,
        "open": 13.300000190734863,
        "high": 13.520000457763672,
        "low": 12.90999984741211,
        "close": 12.9399995803833,
        "volume": 82960100
      },
      {
        "date": 1614085200,
        "open": 13.130000114440918,
        "high": 13.539999961853027,
        "low": 13.069999694824219,
        "close": 13.1899995803833,
        "volume": 44204000
      },
      {
        "date": 1614171600,
        "open": 13.300000190734863,
        "high": 13.399999618530273,
        "low": 13.010000228881836,
        "close": 13.270000457763672,
        "volume": 31119300
      },
      {
        "date": 1614258000,
        "open": 13.25,
        "high": 13.630000114440918,
        "low": 12.539999961853027,
        "close": 12.609999656677246,
        "volume": 46153100
      },
      {
        "date": 1614344400,
        "open": 12.829999923706055,
        "high": 13.119999885559082,
        "low": 11.75,
        "close": 11.869999885559082,
        "volume": 84955900
      },
      {
        "date": 1614603600,
        "open": 12.0600004196167,
        "high": 12.59000015258789,
        "low": 11.979999542236328,
        "close": 12.109999656677246,
        "volume": 54354500
      },
      {
        "date": 1614715182,
        "open": 11.949999809265137,
        "high": 12.069999694824219,
        "low": 11.1899995803833,
        "close": 11.979999542236328,
        "volume": 76153800
      }
    ]
  },
  {
    "symbol": "OIBR3",
    "shortName": "OI          ON      N1",
    "longName": "Oi S.A.",
    "currency": "BRL",
    "regularMarketPrice": 1.82,
    "regularMarketDayHigh": 1.83,
    "regularMarketDayLow": 1.74,
    "regularMarketDayRange": "1.74 - 1.83",
    "regularMarketChange": -0.01999998,
    "regularMarketChangePercent": -1.0869554,
    "regularMarketTime": "2021-03-02T19:59:40.000Z",
    "marketCap": 11255917568,
    "regularMarketVolume": 140052700,
    "regularMarketPreviousClose": 1.84,
    "regularMarketOpen": 1.81,
    "averageDailyVolume10Day": 135235733,
    "averageDailyVolume3Month": 156370908,
    "fiftyTwoWeekLowChange": 1.3900001,
    "fiftyTwoWeekLowChangePercent": 3.2325583,
    "fiftyTwoWeekRange": "0.43 - 2.59",
    "fiftyTwoWeekHighChange": -0.76999986,
    "fiftyTwoWeekHighChangePercent": -0.29729724,
    "fiftyTwoWeekLow": 0.43,
    "fiftyTwoWeekHigh": 2.59,
    "twoHundredDayAverage": 1.9427465,
    "twoHundredDayAverageChange": -0.12274647,
    "twoHundredDayAverageChangePercent": -0.06318193,
    "validRanges": [
      "1d",
      "5d",
      "1mo",
      "3mo",
      "6mo",
      "1y",
      "2y",
      "5y",
      "10y",
      "ytd",
      "max"
    ],
    "historicalDataPrice": [
      {
        "date": 1612267200,
        "open": 2.2799999713897705,
        "high": 2.309999942779541,
        "low": 2.200000047683716,
        "close": 2.2300000190734863,
        "volume": 132634900
      },
      {
        "date": 1612353600,
        "open": 2.240000009536743,
        "high": 2.259999990463257,
        "low": 2.1700000762939453,
        "close": 2.190000057220459,
        "volume": 128304100
      },
      {
        "date": 1612440000,
        "open": 2.200000047683716,
        "high": 2.2300000190734863,
        "low": 2.1500000953674316,
        "close": 2.1600000858306885,
        "volume": 71989100
      },
      {
        "date": 1612526400,
        "open": 2.200000047683716,
        "high": 2.200000047683716,
        "low": 2.0999999046325684,
        "close": 2.119999885559082,
        "volume": 158695600
      },
      {
        "date": 1612785600,
        "open": 2.130000114440918,
        "high": 2.1700000762939453,
        "low": 2.0899999141693115,
        "close": 2.109999895095825,
        "volume": 84232500
      },
      {
        "date": 1612872000,
        "open": 2.109999895095825,
        "high": 2.1500000953674316,
        "low": 2.109999895095825,
        "close": 2.109999895095825,
        "volume": 65775800
      },
      {
        "date": 1612958400,
        "open": 2.119999885559082,
        "high": 2.140000104904175,
        "low": 2.0399999618530273,
        "close": 2.0399999618530273,
        "volume": 158072300
      },
      {
        "date": 1613044800,
        "open": 2.0399999618530273,
        "high": 2.0999999046325684,
        "low": 2.0199999809265137,
        "close": 2.0299999713897705,
        "volume": 159967700
      },
      {
        "date": 1613131200,
        "open": 2.0199999809265137,
        "high": 2.059999942779541,
        "low": 2.009999990463257,
        "close": 2.0399999618530273,
        "volume": 65782500
      },
      {
        "date": 1613574000,
        "open": null,
        "high": null,
        "low": null,
        "close": null,
        "volume": null
      },
      {
        "date": 1613649600,
        "open": 2.069999933242798,
        "high": 2.0899999141693115,
        "low": 2,
        "close": 2,
        "volume": 88313200
      },
      {
        "date": 1613736000,
        "open": 2,
        "high": 2.059999942779541,
        "low": 1.940000057220459,
        "close": 2.0199999809265137,
        "volume": 139375500
      },
      {
        "date": 1613998800,
        "open": 1.9600000381469727,
        "high": 1.9700000286102295,
        "low": 1.8200000524520874,
        "close": 1.8700000047683716,
        "volume": 167399400
      },
      {
        "date": 1614085200,
        "open": 1.909999966621399,
        "high": 2.0199999809265137,
        "low": 1.8799999952316284,
        "close": 2.0199999809265137,
        "volume": 133716500
      },
      {
        "date": 1614171600,
        "open": 2.0299999713897705,
        "high": 2.0399999618530273,
        "low": 1.9500000476837158,
        "close": 1.9500000476837158,
        "volume": 89883000
      },
      {
        "date": 1614258000,
        "open": 1.9500000476837158,
        "high": 1.9900000095367432,
        "low": 1.840000033378601,
        "close": 1.8600000143051147,
        "volume": 131346100
      },
      {
        "date": 1614344400,
        "open": 1.8799999952316284,
        "high": 1.909999966621399,
        "low": 1.809999942779541,
        "close": 1.8799999952316284,
        "volume": 162726300
      },
      {
        "date": 1614603600,
        "open": 1.8899999856948853,
        "high": 1.909999966621399,
        "low": 1.8300000429153442,
        "close": 1.840000033378601,
        "volume": 126343100
      },
      {
        "date": 1614715180,
        "open": 1.809999942779541,
        "high": 1.8300000429153442,
        "low": 1.7400000095367432,
        "close": 1.8200000524520874,
        "volume": 140052700
      }
    ]
  }
],
"requestedAt": "2021-03-02T20:14:43.686Z"
}`}
                  </code>
                </pre>
              </details>
            </p>

            <p>
              <details>
                <summary>
                  <strong>Pesquisar se a ação existe: </strong>
                </summary>
                <pre>
                  <code>
                    {`
// GET https://brapi.ga/api/available?search=CO
// Se não for passado "?search=", é retornado todas as ações disponíveis

{
  "stocks": [
    "COGN3",
    "NTCO3",
    "ECOR3",
    "TFCO4",
    "COCA34",
    "GMCO34",
    "PGCO34",
    "BRCO11",
    "QCOM34",
    "WFCO34",
    "COPH34",
    "COCE5",
    "COWC34",
    "CXCO11",
    "CSCO34",
    "JDCO34",
    "RBCO11",
    "COTY34",
    "COCE5F",
    "ECOO11",
    "COLG34",
    "TMCO34",
    "DGCO34",
    "COCE3",
    "MCOR34",
    "E1CO34",
    "VFCO34",
    "CORR4",
    "ECOO"
  ]
}
`}
                  </code>
                </pre>
              </details>
            </p>

            <p>
              <details>
                <summary>
                  <strong>Listar todas as ações: </strong>
                </summary>
                <p>
                  <strong>Valores aceitos para "sortBy", "sortOrder": </strong>
                  "name", "close", "change", "change_abs", "volume",
                  "market_cap_basic". limit deve ser um número
                </p>

                <pre>
                  <code>
                    {`
// GET https://brapi.ga/api/quote/list?sortBy=volume&sortOrder=desc&limit=5
// Se não for passado "?sortBy=", é ordenado pelo volume do dia
// Se não for passado "?sortOrder=", é ordenado do maior para o menor
// Se não for passado "?limit=", é retornado todas as ações

{
  "stocks": [
    {
      "stock": "B3SA3",
      "close": 16.33,
      "change": -5.55234786,
      "volume": 88534700,
      "market_cap": 105727114568
    },
    {
      "stock": "OIBR3",
      "close": 1.56,
      "change": -4.29447853,
      "volume": 78590800,
      "market_cap": 9809933983
    },
    {
      "stock": "VVAR3",
      "close": 15.29,
      "change": 4.36860068,
      "volume": 59887700,
      "market_cap": 23396841621
    },
    {
      "stock": "PETR3",
      "close": 29.41,
      "change": 2.40251053,
      "volume": 51187500,
      "market_cap": 372220624506
    },
    {
      "stock": "DMMO3",
      "close": 0.98,
      "change": -10.90909091,
      "volume": 47691300,
      "market_cap": 341102360
    }
  ]
}
`}
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

            <p>
              <details>
                <summary>
                  <strong>
                    Interface para Typescript com dados históricos:{' '}
                  </strong>
                </summary>
                <pre>
                  <code>
                    {`declare module brapi {

export interface HistoricalDataPrice {
    date: number;
    open?: number;
    high?: number;
    low?: number;
    close?: number;
    volume?: number;
}

export interface Result {
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
    marketCap: any;
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
    validRanges: string[];
    historicalDataPrice: HistoricalDataPrice[];
}

export interface RootObject {
    results: Result[];
    requestedAt: Date;
}

}
`}
                  </code>
                </pre>
              </details>
            </p>

            <p>
              <details>
                <summary>
                  <strong>Criptomoedas</strong>
                </summary>
                <pre>
                  <code>
                    {`
// GET https://brapi.ga/api/v2/crypto?coin=BTC,ETH&currency=BRL
// Se não for passado "?currency=", é retornado o valor em Real
// A lista de criptomoedas aceitas é encontrada em: https://brapi.ga/api/v2/crypto/available
// A lista de moedas aceitas em "currency" é encontrada em: https://economia.awesomeapi.com.br/json/available/uniq

// O valor de "currencyRate" retornado é o da conversão USD-CURRENCY atual

{
  "coins": [
    {
      "currency": "BRL",
      "currencyRateFromUSD": 5.2429,
      "coinName": "Bitcoin USD",
      "coin": "BTC",
      "regularMarketChange": 402.597362674,
      "regularMarketPrice": 245609.9786803,
      "regularMarketChangePercent": 0.16418155,
      "regularMarketDayLow": 239498.84395450001,
      "regularMarketDayHigh": 248097.83958829998,
      "regularMarketDayRange": "239498.84395450001 - 248097.83958829998",
      "regularMarketVolume": 157848853658.8288,
      "marketCap": 4614316060206.694,
      "regularMarketTime": 1629062402,
      "coinImageUrl": "https://s.yimg.com/uc/fin/img/reports-thumbnails/1.png"
    },
    {
      "currency": "BRL",
      "currencyRateFromUSD": 5.2429,
      "coinName": "EthereumClassic USD",
      "coin": "ETC",
      "regularMarketChange": 47.75498086449999,
      "regularMarketPrice": 391.8953769354,
      "regularMarketChangePercent": 13.87659,
      "regularMarketDayLow": 352.56751371400003,
      "regularMarketDayHigh": 395.06790815439996,
      "regularMarketDayRange": "352.56751371400003 - 395.06790815439996",
      "regularMarketVolume": 33332471762.6368,
      "marketCap": 50539684997.7344,
      "regularMarketTime": 1629062404,
      "coinImageUrl": "https://s.yimg.com/uc/fin/img/reports-thumbnails/1321.png"
    }
  ]
}
`}
                  </code>
                </pre>
              </details>
            </p>

            <p>
              <details>
                <summary>
                  <strong>Pesquisar se a criptomoeda existe</strong>
                </summary>
                <pre>
                  <code>
                    {`
// GET https://brapi.ga/api/v2/crypto/available?search=BT
// Se não for passado "?search=", é retornado todas as criptomoedas disponíveis

{
  "coins": [
    "BTC",
    "BTT1",
    "BTG",
    "BTS",
    "BTM",
    "BTC2",
    "BTX"
  ]
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
                ilimitado. Caso queira me pagar um café:{' '}
                <a
                  href="https://ko-fi.com/pogulive"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ko-fi.com/pogulive
                </a>
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
