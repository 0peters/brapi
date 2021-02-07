import Link from 'next/link';
import React from 'react';
import { ImWhatsapp } from 'react-icons/im';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <span>
          <h1>brapi</h1>
          <Link href="/about">
            <a>sobre</a>
          </Link>
          <Link href="/docs">
            <a>docs</a>
          </Link>
          <Link href="/quotes">
            <a>contação</a>
          </Link>
          <Link href="/contact">
            <a>contato</a>
          </Link>
          <Link href="/legal">
            <a>legal</a>
          </Link>
        </span>

        <span>
          <h1>contato</h1>
          <p>brapi@protonmail.com</p>
          <Link href="http://github.com/alissonsleal/brapi">
            <a target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </Link>
        </span>

        <span>
          <h1>sobre nós</h1>
          <p>
            Ajudamos desenvolvedores a construir o futuro das fintechs
            democratizando o acesso aos dados do mercado financeiro brasileiro.
          </p>
        </span>

        <span>
          <h1>convide</h1>
          <p>Compartilhe com seus amigos!</p>
          <Link href="https://api.whatsapp.com/send?text=Quero%20te%20convidar%20para%20conhecer%20o%20brapi,%20o%20jeito%20mais%20f%C3%A1cil%20de%20acessar%20uma%20API%20da%20bolsa%20de%20valores!%20Clique%20no%20link%20para%20ter%20acesso%20gratuitamente%20https://www.bovespa-api.vercel.app/">
            <a className="wpp-button" rel="noreferrer noopener" target="_blank">
              <ImWhatsapp size={20} />
              Compartilhe agora
            </a>
          </Link>
        </span>
      </div>
    </Container>
  );
};

export default Footer;
