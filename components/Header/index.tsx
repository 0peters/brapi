import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { useAuth } from '../../context/SignUp';

import Logomark from '../Logomark';

import { Container } from './styles';

const Header: React.FC = () => {
  const auth = useAuth();

  const [open, setOpen] = useState(false);

  return (
    <Container open={open}>
      <nav className="mobile-menu">
        <span>
          <Link href="/">
            <a aria-label="brapi">
              <Logomark />
            </a>
          </Link>

          <button onClick={() => setOpen(!open)} aria-label="Menu">
            <FiMenu size={24} />
          </button>
        </span>

        <ul className="mobile-menu-items">
          <li>
            <Link href="/about">
              <a>sobre</a>
            </Link>
          </li>
          <li>
            <Link href="/docs">
              <a>docs</a>
            </Link>
          </li>
          <li>
            <Link href="/quotes">
              <a>cotação</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>contato</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>entrar</a>
            </Link>
          </li>
          <li>
            <Link href="/create-account">
              <a>criar conta</a>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="menu">
        <Link href="/">
          <a aria-label="brapi">
            <Logomark />
          </a>
        </Link>

        <ul>
          <li>
            <Link href="/about">
              <a>sobre</a>
            </Link>
          </li>

          <li>
            <Link href="/docs">
              <a>docs</a>
            </Link>
          </li>

          <li>
            <Link href="/quotes">
              <a>cotação</a>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <a>contato</a>
            </Link>
          </li>
        </ul>
      </nav>

      {auth?.currentUser ? (
        <Link href="/login">
          <a>
            <img
              className="profile-picture"
              src={auth?.currentUser?.photoURL}
              alt="Foto de perfil do usuário"
            />
          </a>
        </Link>
      ) : (
        <ul className="ul-right">
          <li>
            <Link href="/login">
              <a>entrar</a>
            </Link>
          </li>
          <li>
            <Link href="/create-account">
              <a className="rounded-border">criar conta</a>
            </Link>
          </li>
        </ul>
      )}
    </Container>
  );
};

export default Header;
