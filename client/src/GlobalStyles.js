import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    /* --background-primary: #1F2933; */
    --background-primary: #1A1D29;
    /* --background-secondary: #273340; */
    /* --background-secondary: #222636; */
    --background-secondary: #202433;
    --primary: #02D3DE;
    --secondary: #de9a18;
    --text-secondary: #7CA4CC;
    --font-large: 2.5rem;
    --font-medium: 1.5rem;
    --font-small: 0.75rem;
  }

  * {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    padding: 0;
    cursor: default;
    min-height: 100%;
    background-color: var(--background-primary);
  }


  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace;
  }
`;
