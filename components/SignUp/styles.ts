import styled from 'styled-components';

export const Container = styled.div`
  * {
    padding: 0;
    margin: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  text-align: center;

  main {
    display: flex;
    flex-direction: column;
    background-color: var(--background-light);
    min-height: 50%;
    width: 100%;
    max-width: 35rem;
    justify-content: space-evenly;
    padding: 2rem;
    margin: 1rem;
    border-radius: 1rem;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
    color: #fafafa;

    .button-leave {
      background-color: #f22;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 1rem;
      font-size: 1rem;
      font-weight: bold;
      color: #fafafa;
      background-color: var(--main-dark);
      transition: opacity 0.3s ease;

      svg {
        margin-right: 1rem;
      }

      &:hover {
        opacity: 0.9;
      }

      &:active {
        opacity: 1;
      }
    }

    .info-container {
      margin-top: 5rem;
      display: flex;
      text-align: left;
      justify-content: center;

      img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        border: 2px solid var(--main);
        margin-right: 1rem;
      }
    }

    .text-container {
      color: var(--text);
    }
  }
`;
