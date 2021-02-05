import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../Layout';

import NotFoundImg from '../assets/not-found.svg';
import Header from '../components/Header';

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    color: var(--text);
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  text-align: center;
  height: calc(100vh - 80px);

  span {
    display: flex;
    flex-direction: column;

    a {
      width: 100%;
      font-weight: bold;
      padding: 0.5rem;
      margin: 1rem 0;
      border: 2px solid var(--text);
      border-radius: 0.75rem;

      :hover {
        color: var(--main);
        border: 2px solid var(--main);
      }

      :active {
        color: var(--main-dark);
        border: 2px solid var(--main-dark);
      }
    }
  }

  img {
    width: 100%;
    max-width: 40rem;
    object-fit: contain;
  }
`;

const NotFound: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Container>
        <img src={NotFoundImg} alt="Pessoa sentada no número 404" />
        <span>
          <h1>{`Essa página não existe :(`}</h1>
          <p>Deseja voltar para a página inicial?</p>
          <Link href="/">
            <a>Página Inicial</a>
          </Link>
        </span>
      </Container>
    </Layout>
  );
};

export default NotFound;
