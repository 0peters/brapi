import styled from 'styled-components';

interface ContainerProps {
  textColor: string;
}

export const Container = styled.div<ContainerProps>`
  svg {
    max-width: 100px;
  }
`;
