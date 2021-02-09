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

At brapi, you have access to a real-time stock data on the Brazilian stock market with a 15-minute delay. You have access to an API that shows all the necessary data for you to develop your own application related to the Brazilian stock market. We help developers build the future of fintechs by democratizing access to data in the Brazilian financial market.

Works with common Brazilian stock shares ending in 3 and 4(Like PETR4 or COGN3). It also works with Investment Fund stocks ending with end 11(Like BOVA11 or HGLG11).

Check Here: [https://brapi.ga](https://brapi.ga)

Documentation: [https://brapi.ga/docs](https://brapi.ga/docs)

## Features

### Real Time Data

We provide data from the Brazilian stock market in real time and totally free for now.

  <p align="center">
    <img  max-width="768" src="https://i.imgur.com/iDRs0lO.png">
  </p>
<br />

### Unlimited Requests

Our API has no limits for now, use at your will.

  <p align="center">
    <img  max-width="768" src="https://i.imgur.com/QitsOx0.png">
  </p>
<br />

### From developers to developers

We developed the easiest API to start using, no registration, no credit card and without any type of authentication.

```json
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
}
```

<br />

## Built With:

- [x] Next.js
- [x] Typescript
- [x] Axios
- [x] Styled-Components
- [x] Yahoo API
- [x] TradingView API
- [x] Deployed to Vercel

## Contributions

Feel free to contribute or report issues. Also, if you have any ideas on new names hit me up.

## Disclaimer

This project is not affiliated in any way with Yahoo or TradingView or any other company mentioned here or on the website [brapi.ga](brapi.ga).

This is an API for informational purposes. We do not guarantee data accuracy
provided by the API or contained on this page, as they must
be used for informational purposes only. We work for
stability and accuracy of the data, however, the data may be
delayed or wrong "as is", confirm
all data before taking any action that may be
affected by these values, as well as other API endpoints.

## Author Info

- Twitter - [@alissonsleal](https://twitter.com/alissonsleal)
- Discord - [Alisson#0629](https://discord.com/)
- StackOverflow - [Alisson Leal](https://stackoverflow.com/users/14122260/alisson-leal)

[Go to the top 🚀](#brapi)

<p align="center">
    <img  width="256" src="https://i.imgur.com/pY5brQ8.png">
  </p>
