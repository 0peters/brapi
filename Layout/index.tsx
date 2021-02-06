import React from 'react';
// import Header from '../components/Header';
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
