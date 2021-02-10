import styled from 'styled-components';

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    color: var(--text);
  }

  display: flex;
  flex-direction: column;
  padding: 2rem;
  min-height: calc(100vh - 80px);
  color: var(--text);

  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1360px;
    align-self: center;
    padding: 1rem;

    @media (max-width: 1360px) {
      max-width: 980px;
    }

    article {
      display: grid;
      /* grid-auto-columns: auto; */
      grid-template-columns: repeat(5, minmax(150px, auto));
      grid-gap: 1rem;

      @media (max-width: 1360px) {
        grid-template-columns: repeat(4, minmax(150px, auto));

        @media (max-width: 920px) {
          grid-template-columns: repeat(3, minmax(150px, auto));

          @media (max-width: 610px) {
            grid-template-columns: repeat(2, minmax(150px, auto));

            @media (max-width: 430px) {
              grid-template-columns: 1fr;
            }
          }
        }
      }

      section {
        background-color: var(--background-light);
        border-radius: 1rem;
        display: flex;
        place-content: center;
        box-shadow: 0px 0px -10px var(--main);

        transition: all 0.2s ease-out;

        a {
          padding: 2rem;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          place-items: center;
          cursor: pointer;

          img {
            margin: 0.5rem;
            border-radius: 50%;
          }
        }

        :hover {
          /* background-color: purple; */
          transform: translate3d(-6px, -6px, 3px);
          box-shadow: 6px 6px 0px var(--main);
        }
      }
    }
  }
`;
