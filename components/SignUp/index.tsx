import { useAuth } from '../../context/SignUp';
import { Container } from './styles';

const SignUp: React.FC = () => {
  const auth = useAuth();

  return (
    <Container>
      <button onClick={() => auth.signinWithGithub()}>Entrar com Github</button>
      {auth?.currentUser && (
        <button onClick={() => auth.signout()}>Sair</button>
      )}
      <p>{auth?.currentUser?.displayName}</p>
      <p>{auth?.currentUser?.email}</p>
      {console.log(auth)}
    </Container>
  );
};

export default SignUp;
