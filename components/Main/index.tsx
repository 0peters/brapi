import React from 'react';

import { Container } from './styles';

import stockGuy from '../../assets/front-page/main-stock.svg';

const Main: React.FC = () => {
  return (
    <Container>
      <main>
        <h1>API de Ações</h1>
        <p>
          Tenha acesso instantâneo aos valores da cotação da bolsa de valores
        </p>
        <button>Saiba mais</button>
      </main>

      <img src={stockGuy} alt="Person looking at a stock chart" />
    </Container>
  );
};

export default Main;
