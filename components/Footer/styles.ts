import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 760px;
  display: flex;
  place-items: center;
  margin: 2rem;
  padding: 2rem;
  background-color: var(--main-dark);
  border-radius: 2rem;

  h1 {
    font-size: 18px;
    color: var(--text);
  }

  p {
    font-size: 14px;
    color: var(--text);
  }
`;
