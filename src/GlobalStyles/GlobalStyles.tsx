import { createGlobalStyle } from "styled-components";
import { typography } from "@moda/tokens";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: ${typography["root-font-size"]};
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  button {
    margin: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  body,
  input {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
