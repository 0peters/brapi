<p align="center">
    <img  width="256" src="https://i.imgur.com/pY5brQ8.png">
  </p>

<p align="center">
    <a href="https://github.com/Alissonsleal/brapi/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/Alissonsleal/brapi?color=sucess&style=flat-square"></a>
    <a href="https://github.com/Alissonsleal/brapi/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/Alissonsleal/brapi?color=sucess&style=flat-square"></a>
    <a href="https://github.com/Alissonsleal/brapi/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/Alissonsleal/brapi?color=sucess&style=flat-square"></a>
    <a href="https://github.com/Alissonsleal/brapi/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/Alissonsleal/brapi?color=sucess&style=flat-square"></a>
    <a href="https://github.com/Alissonsleal/"><img alt="Alisson Leal GitHub Profile" src="https://img.shields.io/badge/made%20by-Alisson%20Leal-sucess?style=flat-square&logo=appveyor"></a>
</p>

# brapi

Na brapi, você tem acesso à cotação em tempo real das ações da Ibovespa com um delay de 15 minutos. Você tem acesso à uma API que mostra todos os dados necessarios para você desenvolver a sua própria aplicação relacionada ao mercado de ações brasileiro.

Funciona com Ações comuns com final 3 e 4. Também funciona com Fundos de Investimento com final 11.

Saiba mais: [https://brapi.ga](https://brapi.ga)

Documentação: [https://brapi.ga/docs](https://brapi.ga/docs)

## Recursos

### Acesso em tempo real

Providenciamos dados do mercado de ação brasileiro em tempo real e totalmente grátis por enquanto.

  <p align="center">
    <img  max-width="768" src="https://i.imgur.com/ACSGbKi.png">
  </p>
<br />

### Requisições Ilimitadas

Nossa API não tem limites por enquanto, use a vontade.

  <p align="center">
    <img  max-width="768" src="https://i.imgur.com/AmthmHR.png">
  </p>
<br />

### De Desenvolvedores para Desenvolvedores

Desenvolvemos a API mais fácil de começar a utilizar, sem cadastros, sem cartão de crédito e sem qualquer tipo de autenticação.

```json
// GET http://brapi.ga/api/quote/COGN3
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
}
```

<br />

## Feito com:

- [x] Next.js
- [x] Typescript
- [x] Axios
- [x] Styled-Components
- [x] Yahoo API
- [x] TradingView API
- [x] Deploy na Vercel

## Contribuições

Sinta-se livre para contribuir ou reportar algum erro ou sujestão.

## Exoneração de Responsabilidade

Esse projeto não é afiliado de qualquer forma à Yahoo ou TradingView or qualquer outra empresa mencionada aqui ou no site [brapi.ga](brapi.ga).

Essa é uma API para fins informativos. Não garantimos a precisão dos dados
fornecidos pela API ou contidos nesta página, uma vez que devem
ser utilizados apenas para efeitos informativos. Trabalhamos pela
estabilidade e precisão dos dados, porém, os dados podem estar
atrasados ou errados "no estado em que se encontram", confirme
todos os dados antes de efetuar qualquer ação que possa ser
afetada por estes valores, assim como demais endpoints da API.

## Desenvolvedor

- Twitter - [@alissonsleal](https://twitter.com/alissonsleal)
- Discord - [Alisson#0629](https://discord.com/)
- StackOverflow - [Alisson Leal](https://stackoverflow.com/users/14122260/alisson-leal)

[Subir ao Topo 🚀](#brapi)

<p align="center">
    <img  width="256" src="https://i.imgur.com/pY5brQ8.png">
  </p>
