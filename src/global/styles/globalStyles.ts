import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
html, body{
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: ${theme.font.default}
}

* {
  box-sizing: border-box;
}

`;
