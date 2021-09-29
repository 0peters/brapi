import Link from 'next/link';
import React from 'react';
import { ImWhatsapp } from 'react-icons/im';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <span>
          <h2>brapi</h2>
          <Link href="/about">
            <a>sobre</a>
          </Link>
          <Link href="/docs">
            <a>docs</a>
          </Link>
          <Link href="/quotes">
            <a>cotação</a>
          </Link>
          <Link href="/contact">
            <a>contato</a>
          </Link>
          <Link href="/legal">
            <a>legal</a>
          </Link>
          <Link href="https://status.brapi.ga/">
            <a target="_blank" rel="noopener noreferrer">
              status
            </a>
          </Link>
        </span>

        <span>
          <h2>contato</h2>
          <p>brapi@protonmail.com</p>
          <Link href="https://github.com/alissonsleal/brapi/issues">
            <a target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </Link>
        </span>

        <span>
          <h2>sobre nós</h2>
          <p>
            Ajudamos desenvolvedores a construir o futuro das fintechs
            democratizando o acesso aos dados do mercado financeiro brasileiro.
          </p>
        </span>

        <span>
          <h2>convide</h2>
          <p>Compartilhe com seus amigos!</p>
          <Link href="https://api.whatsapp.com/send?text=Quero%20te%20convidar%20para%20conhecer%20o%20brapi,%20o%20jeito%20mais%20f%C3%A1cil%20de%20acessar%20uma%20API%20da%20bolsa%20de%20valores!%20Clique%20no%20link%20para%20ter%20acesso%20gratuitamente%20https://www.brapi.ga/">
            <a className="wpp-button" rel="noreferrer noopener" target="_blank">
              <ImWhatsapp size={20} />
              Compartilhe agora
            </a>
          </Link>
          <br />
          <br />
          <br />
          <br />
          <a
            href="https://vercel.com/?utm_source=alisson-oss&utm_campaign=oss"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" />
          </a>
        </span>
      </div>
    </Container>
  );
};

export default Footer;
