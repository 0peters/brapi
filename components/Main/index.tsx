import React from 'react';
import Link from 'next/link';

import { Container } from './styles';

import mainProgrammer from '../../assets/front-page/main-programmer.svg';
import mainSpeed from '../../assets/front-page/main-speed.svg';
import stockGuy from '../../assets/front-page/main-stock.svg';
import mainContact from '../../assets/front-page/main-contact.svg';

const Main: React.FC = () => {
  return (
    <Container>
      <main>
        <section>
          <aside>
            <h1>API de Ações</h1>
            <p>
              Tenha acesso instantâneo aos valores da cotação da bolsa de
              valores e dados históricos
            </p>
            <div>
              <Link href="/about">
                <a>Saiba mais</a>
              </Link>
              <Link href="/docs">
                <a className="button-action">Docs</a>
              </Link>
            </div>
          </aside>
          <img src={mainProgrammer} alt="Pessoa olhando um gráfico de ações" />
        </section>

        <section>
          <aside>
            <h1>Simples de Usar</h1>
            <p>
              Sem autenticações ou métodos complexos, documentação direta ao
              ponto
            </p>
            <Link href="/docs">
              <a>Documentação</a>
            </Link>
          </aside>
          <img src={mainSpeed} alt="Pessoa sentada em cima de um velocimetro" />
        </section>

        <section>
          <aside>
            <h1>Cotação em Tempo Real</h1>
            <p>
              Acesse a nossa interface para cotação em tempo real das ações
              brasileiras ou criptomoedas
            </p>
            <Link href="/quotes">
              <a>Cotação</a>
            </Link>
          </aside>
          <img src={stockGuy} alt="Pessoa olhando um gráfico de ações" />
        </section>

        <section>
          <aside>
            <h1>Entre em Contato</h1>
            <p>Encontrou algum problema, ou tem alguma sugestão?</p>
            <Link href="https://github.com/alissonsleal/brapi">
              <a target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </Link>
          </aside>
          <img
            src={mainContact}
            alt="Pessoas olhando o celular e logos de mensagem e telefone"
          />
        </section>
      </main>
    </Container>
  );
};

export default Main;
