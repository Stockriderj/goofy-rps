import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 3.2rem;
    overflow: hidden;
  }

  @media (max-width: 600px) {
  
    html {
      font-size: 31.25%;
    }
    
  }
`;

export default GlobalStyles;
