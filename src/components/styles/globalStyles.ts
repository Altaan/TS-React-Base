import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color-dark: hsl(205 20% 10%);
    --primary-color-light: hsl(0 10% 90%);
    --color-light-green: hsl(140 90% 60%);
    --color-light-orange: hsl(30, 100%, 50%, 75%)
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    /* display: grid;
    min-height: 100vh;
    place-items: center;
    line-height: 1.6; */
    background: var(--primary-color-light);
  }
`;

export default GlobalStyle;
