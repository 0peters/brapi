import styled from 'styled-components';

export const Container = styled.footer`
  * {
    margin: 0;
    padding: 0;
  }

  max-width: 100vw;
  min-height: 20rem;
  display: flex;
  place-content: center;
  background-color: var(--background-light);
  color: var(--text);

  div {
    max-width: 980px;
    display: grid;
    align-items: baseline;
    justify-content: center;
    grid-template-columns: 24% 24% 24% 24%;
    column-gap: 1%;

    span {
      display: flex;
      flex-direction: column;

      h2 {
        font-weight: 600;
        padding: 1rem 0;
      }

      a {
        color: inherit;

        :hover {
          font-weight: 600;
          color: var(--main);
        }

        :active {
          font-weight: 600;
          color: var(--main-dark);
        }
      }

      .wpp-button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--main);
        color: #fafafa;
        padding: 1rem;
        text-align: center;
        border-radius: 0.75rem;
        font-weight: 600;
        margin-top: 1rem;
        transition: all 0.1s;

        svg {
          margin-right: 1rem;
        }

        :hover {
          color: var(--main-dark);
          transform: translate3d(-3px, -4px, 0px);
          box-shadow: 3px 4px 6px #ddd;

          @media (prefers-color-scheme: dark) {
            box-shadow: 3px 4px 6px #111;
          }
        }
      }
    }

    @media (max-width: 990px) {
      grid-template-columns: 48% 48%;
      padding: 3rem 3rem 5rem 3rem;
    }

    @media (max-width: 590px) {
      text-align: center;
      grid-template-columns: 100%;
      padding: 1rem 3rem 5rem 3rem;
    }
  }
`;
