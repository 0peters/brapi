import styled from 'styled-components';

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  display: flex;
  justify-content: center;
  padding: 0 2rem;

  main {
    width: 100vw;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 2rem;
      width: 100%;

      aside {
        display: flex;
        flex-direction: column;
        h1 {
          font-size: 24px;
          margin: 2rem 0 1rem 0;
          color: var(--text);
        }

        h2 {
          color: var(--text);

          a {
            color: var(--main-dark) !important;

            &:hover {
              color: var(--main) !important;
            }
          }
        }

        p {
          color: var(--text);
        }
      }

      .every-stock {
        display: inline-block;
        width: initial;
        margin-left: 0.5rem;
        color: var(--text);

        background-color: initial;

        :hover {
          transform: none;
          box-shadow: none;
          color: var(--main-dark);
        }

        :active {
          transform: scale(1.1);
          box-shadow: none;
        }
      }

      a {
        width: 100%;
        max-width: 980px;
        margin: 0.5rem 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: var(--background-light);
        border-radius: 24px;
        z-index: 0;

        transition: all 0.1s ease-out;

        :hover {
          transform: translate3d(-3px, -4px, 0px);
          box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.1);
        }

        :active {
          background-color: var(--background);
          transform: translate3d(-3px, -4px, 0px);
          box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.1);
        }

        .card {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 1rem 2rem;

          @media (max-width: 768px) {
            padding: 1rem 1rem;
          }

          img {
            object-fit: fill;
            border-radius: 50%;
            width: 4rem;
            height: 4rem;
          }

          ul {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            list-style-type: none;

            li {
              color: var(--text);

              strong {
                font-size: 14px;
                font-weight: 600;
              }

              p {
                font-size: 20px;
                color: inherit;
              }
            }
          }
        }
      }
      @media (max-width: 590px) {
        & + section {
          display: grid;
          justify-content: space-evenly;
          grid-template-columns: 45% 45%;

          @media (max-width: 440px) {
            grid-template-columns: 100%;
          }
        }

        a {
          .card {
            flex-direction: column;

            ul {
              flex-direction: column;
            }
          }
        }
      }
    }
  }
`;
