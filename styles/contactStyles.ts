import styled from 'styled-components';

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    color: var(--text);
  }

  min-height: calc(100vh - 80px);
  display: flex;
  place-content: center;

  main {
    max-width: 980px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 2rem;

    section {
      h1 {
        font-size: 2rem;
      }

      ul {
        padding: 3rem 0;

        li {
          list-style-type: none;

          a {
            :hover {
              font-weight: 600;
              color: var(--main);
            }

            :active {
              font-weight: 600;
              color: var(--main-dark);
            }
          }
        }
      }

      img {
        width: 100%;
        max-width: 30rem;
        margin-left: 4rem;
      }
    }
  }

  @media (max-width: 980px) {
    main {
      flex-direction: column;
      justify-content: center;
      font-size: 120%;

      section {
        img {
          margin-left: 0;
        }
      }
    }
  }
`;
