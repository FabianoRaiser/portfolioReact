import styled from "styled-components";
import { verdeEscuro, textoBranco } from "@/styles/variaveisCSS";

export const StyledCardProj = styled.div`
    width: 30%;

    background-color: ${verdeEscuro};
    border-radius: 24px;

    padding: 16px;

    img {
        width: 100%;
        border-radius: 24px 24px 0 0 ;
    }

    div {
        padding: 0 16px 0 16px ;
        color: ${textoBranco};
    }
`