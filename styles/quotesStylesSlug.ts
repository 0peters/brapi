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
    max-width: 980px;
    align-self: center;
    padding: 1rem;
    background-color: var(--background-light);
    border-radius: 1rem;

    section {
      display: grid;
      align-items: center;
      /* justify-content: space-evenly; */
      max-width: 100%;

      & + section {
        margin-top: 2rem;
        grid-template-columns: 20% 20% 20% 20% 20%;
      }

      aside {
        display: flex;
        align-items: center;

        img {
          border-radius: 50%;
          max-height: 4rem;
          min-width: 4rem;
          margin-right: 1rem;
          display: flex;
        }

        h1 {
          font-size: 26px;
        }
      }

      span {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 0 1rem;
        text-align: center;

        strong {
          i {
            font-size: 12px;
            display: block;
          }
        }
      }
    }
    .bottom-right {
      margin: 2rem 0 0 0;
      display: flex;
      justify-content: flex-end;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 570px) {
    padding: 2rem 0.25rem;

    main {
      section {
        justify-content: center;
        & + section {
          grid-template-columns: 100%;
          margin-top: 0;

          span {
            padding: 0.5rem;
            font-size: 20px;
          }
        }
      }
    }
  }
`;
