import { useAuth } from '../../context/SignUp';
import { Container } from './styles';
import { FiGithub } from 'react-icons/fi';
import Link from 'next/link';

const SignUp: React.FC = () => {
  const auth = useAuth();

  return (
    <Container>
      <main>
        {!auth?.currentUser ? (
          <>
            <h1>Login</h1>
            <p>
              Entre com sua conta do GitHub para acessar seu painel da brapi
            </p>
          </>
        ) : (
          <>
            <h1>Bem Vindo à brapi</h1>
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
            Entrar com Github
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
