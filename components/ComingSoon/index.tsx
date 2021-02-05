import React from 'react';

import { Container } from './styles';

import ConstructionImg from '../../assets/construction.svg';

const ComingSoon: React.FC = () => {
  return (
    <Container>
      <h1>Essa página está em construção :/</h1>
      <img src={ConstructionImg} alt="Duas pessoas construindo uma casa" />
    </Container>
  );
};

export default ComingSoon;
