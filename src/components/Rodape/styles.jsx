import styled from "styled-components";
import { gradienteVerdeAlfa_Rod, } from "@/styles/variaveisCSS";

export const StyledRodape = styled.footer`
    position: absolute;
    bottom: 0;

    width: 100%;

    background-image: ${gradienteVerdeAlfa_Rod};

    padding: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    p {
        text-align: center;
        color: #fff;
    }

    p:nth-child(3) {
        font-size: 0.75rem;
    }
`

export const LogoRodape = styled.img`
    width: 160px;
`