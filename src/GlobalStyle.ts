import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding:0;
    margin:0;
    text-decoration : none;
  }

  body {
    line-height: 1;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }

  ::-webkit-scrollbar {
    display: none !important;
  }
`;

export default GlobalStyle;
