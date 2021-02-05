import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  text-align: center;
  height: calc(100vh - 80px);

  img {
    width: 100%;
    max-width: 40rem;
    object-fit: contain;
  }
`;
