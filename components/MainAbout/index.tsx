import { Container } from './styles';

import WorkTogetherImg from '../../assets/work-together.svg';

const MainAbout = () => {
  return (
    <Container>
      <main>
        <section>
          <aside>
            <h1>Quem nós somos</h1>
            <p>
              A brapi foi fundada por um desenvolvedor que precisou utilizar
              dados do mercado de ações da Bovespa em um de seus projetos. Ao
              buscar uma API gratuita descobriu que simplesmente não existe uma
              API brasileira gratuita de fácil acesso e sem métodos fáceis para
              ter esse acesso. Mesmo depois de fazer todo o processo de criação
              de conta, incluindo todos os seus dados pessoais e até mesmo
              cartão de crédito, todas as APIs tinham um limite baixo. Na brapi,
              nós acreditamos que os desenvolvedores devem ter as ferramentas
              corretas e fácil acesso para que tecnologias disruptivas possam
              ser criadas. Estamos felizes em poder simplificar gratuitamente o
              processo de criação de novas tecnologias.
            </p>
          </aside>
          <aside>
            <h2>Nossa Missão</h2>
            <p>
              Ajudar desenvolvedores a construir o futuro das fintechs
              democratizando o acesso aos dados do mercado financeiro
              brasileiro.
            </p>
          </aside>
        </section>
        <img src={WorkTogetherImg} />
      </main>
    </Container>
  );
};

export default MainAbout;
