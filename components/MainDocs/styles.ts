import styled from 'styled-components';

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  display: flex;
  justify-content: center;
  padding: 0 2rem;
  min-height: 100vh;

  main {
    width: 100vw;
    max-width: 980px;
    display: flex;
    flex-direction: column;
    text-align: justify;

    section {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;

      aside {
        display: flex;
        flex-direction: column;
        max-width: 100%;
        color: var(--text);

        h1 {
          font-size: 24px;
          margin: 2rem 0 1rem 0;
          color: inherit;
        }

        h2 {
          margin: 2rem 0 1rem 0;
          font-size: 18px;
        }

        p {
          color: inherit;
          padding: 0rem;

          a {
            color: var(--main-dark);

            :hover {
              color: var(--main);
            }

            :active {
              color: var(--text);
            }
          }

          details {
            padding-top: 1rem;

            summary {
              background-color: var(--background-light);

              padding: 1rem;
              border-radius: 1rem;
              cursor: pointer;
              box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
            }

            ul {
              padding: 0.5rem 0 0.5rem 3rem;
              li {
                span {
                  color: var(--main-dark);
                }

                ::marker {
                  color: var(--main);
                }
              }
            }

            pre {
              background-color: var(--background-light);
              padding: 0.25rem 0 0 1rem;
              margin-top: 0.5rem;
              border-left: 6px solid var(--main);

              @media (max-width: 530px) {
                display: flex;
                padding: 0;

                code {
                  overflow-x: none;
                }
              }
            }
          }

          code {
            background-color: var(--background-light);
            padding: 0.1rem;
          }
        }
      }

      img {
        max-width: 100%;
        padding: 4rem 2rem;
      }
    }
  }
  @media (max-width: 530px) {
    padding: 0 0.5rem;

    img {
      padding: 2rem 1rem;
    }
  }
  @media (max-width: 450px) {
    padding: 0;

    img {
      padding: 2rem 0rem;
    }
  }
`;
