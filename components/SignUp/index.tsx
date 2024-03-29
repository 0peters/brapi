import { useAuth } from '../../context/SignUp';
import { Container } from './styles';
import { FiGithub } from 'react-icons/fi';
import Link from 'next/link';

const SignUp = ({ create = false }: any) => {
  const auth = useAuth();

  return (
    <Container>
      <main>
        {!auth?.currentUser ? (
          <>
            <h1>{create ? `Criar um Conta` : `Entrar`}</h1>
            <p>
              Você não precisa ter uma conta para utilizar a nossa API, estamos
              em fase de testes e estamos testando um sistema de login aqui :)
              <br />
              <Link href="/docs">
                <a className="docs-link" rel="noopener noreferrer">
                  Documentação
                </a>
              </Link>
            </p>

            {/* ADD THIS WHEN WE GET A DASHBOARD PAGE
            
            <p>
              {create
                ? `Crie sua conta a partir do seu GitHub para acessar o seu painel da brapi`
                : `Entre com sua conta do GitHub para acessar seu painel da brapi`}
            </p> */}
          </>
        ) : (
          <>
            <h1>Bem vindo à brapi</h1>
            <p>Acesse a sua dashboard abaixo:</p>
            <Link href="/quotes">
              <a>
                <button>Dashboard</button>
              </a>
            </Link>
          </>
        )}

        {!auth?.currentUser && (
          <button onClick={() => auth.signinWithGithub()}>
            <FiGithub size={'1rem'} color="#fafafa" />
            {create ? `Criar conta com Github` : `Entrar com Github`}
          </button>
        )}

        {auth?.currentUser && (
          <>
            <div className="info-container">
              <img
                src={auth?.currentUser?.photoURL}
                alt="Foto de perfil do usuário"
              />
              <div className="text-container">
                <p>{auth?.currentUser?.displayName}</p>
                <p>{auth?.currentUser?.email}</p>
              </div>
            </div>

            <button className="button-leave" onClick={() => auth.signout()}>
              Sair
            </button>
          </>
        )}
      </main>
    </Container>
  );
};

export default SignUp;
