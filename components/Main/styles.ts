import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text);
  /* overflow-x: hidden; */

  main {
    display: flex;
    flex-direction: row;
    flex-direction: column;
    align-items: center;
    width: 90%;

    section {
      display: flex;
      width: 100%;
      height: calc(100vh - 5rem);
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      aside {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        h1 {
          font-size: 28px;
          font-weight: 600;
          margin: 0;
        }

        p {
          max-width: 18rem;
        }

        a {
          color: var(--text);
          border: 1px solid #999999;
          border-radius: 0.75rem;
          padding: 0.5rem 1.25rem;
          text-align: center;
          font-family: 'Open Sans', sans-serif;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;

          transition: all 0.1s ease;

          :hover {
            border-color: var(--main);
            color: var(--main);
          }

          :active {
            border-color: var(--main-dark);
            color: var(--main-dark);
          }
        }
      }
    }

    img {
      max-width: 25rem;
      height: auto;
      object-fit: cover;
      object-position: center;
    }

    .coming-soon {
      color: gray;
      opacity: 0.6;
      pointer-events: none;
    }
  }

  @media (max-width: 768px) {
    main {
      flex-direction: column;

      section {
        flex-direction: column;

        aside {
          align-items: center;
          text-align: center;
        }

        & + section {
          margin-top: 8rem;
        }
      }
    }
  }
`;
