import React from 'react';
import Footer from '../components/Footer';
import GlobalStyle from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
