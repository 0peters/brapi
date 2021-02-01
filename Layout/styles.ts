import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
    --white: #fefefe
  }
  
  * {
    box-sizing: border-box;
  }

  body {
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  
  }
  a {
    text-decoration: none;
  }

  input, button {
    border: none;
  }
  
  button {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0);
    ::focus {
      border: none;
    }
  }
`;

export default GlobalStyle;
