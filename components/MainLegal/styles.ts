import styled from 'styled-components';

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  display: flex;
  justify-content: center;
  padding: 0 2rem;
  height: 100vh;

  main {
    width: 100vw;
    max-width: 1280px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    text-align: justify;

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      margin-bottom: 2rem;
      width: 100%;

      aside {
        display: flex;
        flex-direction: column;
        max-width: 100%;
        padding: 0 4rem 0 0;
        color: var(--text);

        h1 {
          font-size: 24px;
          margin: 2rem 0 1rem 0;
          color: inherit;
        }

        p {
          color: inherit;
        }
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      section {
        aside {
          padding: 0;
        }
      }
    }
  }
`;
