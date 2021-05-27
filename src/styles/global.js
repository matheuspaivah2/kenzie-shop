import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, figure, div, input, textarea, p, h1, h2, h3, h4, h5, h6, ul, a{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

`;

export default GlobalStyle;
