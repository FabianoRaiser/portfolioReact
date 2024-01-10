import styled from "styled-components";
import { gradienteVerdeAlfa_Nav } from "@/styles/variaveisCSS";

export const StyledListaNav = styled.ul`
    background-image: ${gradienteVerdeAlfa_Nav};

    width: 0%;
    white-space: nowrap;
    overflow: hidden;

    position: absolute;
    top: 100%;
    left: 0;

    flex-direction: column;
    gap: 8px;
    padding: 16px 0;

    -webkit-transition: width 1s, padding 1s ease-in-out;
    -moz-transition: width 1s, padding 1s ease-in-out;
    -o-transition: width 1s, padding 1s ease-in-out;
    transition: width 1s, padding 1s ease-in-out;

`

export const StyledLinksRedes = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 16px 0;
`