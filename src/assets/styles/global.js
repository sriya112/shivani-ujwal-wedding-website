import { createGlobalStyle } from 'styled-components';

import colors from './variables/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    font-family: 'Lato', 'Segoe UI', Verdana, Arial, sans-serif;
    background: ${colors.bgColor};
    color: ${colors.text.dark.medium};
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button {
    font: 16px 'Lato', 'Segoe UI', Verdana, Arial, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: 500;
  }

  *:focus {
    outline: 0;
  }

  a {
    text-decoration: none;
    color: ${colors.primary.main};
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
