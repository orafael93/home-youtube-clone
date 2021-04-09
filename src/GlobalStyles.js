import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background: #121212;
    color: #fff;
    font-family: "Roboto", sans-serif;
    background: #181818;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;
