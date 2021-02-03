import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  color: var(--text);

  overflow: hidden;

  main {
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

    button {
      color: var(--text);
      border: 1px solid #999999;
      border-radius: 0.75rem;
      padding: 0.5rem 1.25rem;
      text-align: center;
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      font-weight: 600;
    }
  }
  img {
    max-width: 25rem;
    height: auto;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    main {
      margin-bottom: 3rem;
    }
  }
`;
