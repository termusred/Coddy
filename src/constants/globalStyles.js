import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: gray;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: ${({theme}) => theme.primary};
  }
`;
 
export default GlobalStyle;