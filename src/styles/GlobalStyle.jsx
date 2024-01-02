import { createGlobalStyle } from "styled-components";
import { corFundo, fontFamilyNoto } from "./variaveisCSS";


export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }

    body {
        background-color: ${corFundo};
        font-family: ${ fontFamilyNoto };
    }
`