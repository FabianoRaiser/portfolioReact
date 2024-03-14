import styled from "styled-components";
import backAprensetacao from "/monitorAprensetacao.png"
import { textoBranco, verdeClaro } from "../../styles/variaveisCSS";

export const StyledAprentacao = styled.section`
    background-image: url(${backAprensetacao});
    background-repeat: no-repeat;
    background-position: 75%;
    background-size: 35%;
    height: 480px;

    padding: 16px;
    
    display: flex;
    align-items: center;
`;

export const AprenTexto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 45%;

    h1 {
        font-size: 2.5rem;
        color: ${verdeClaro};
    }

    h2 {
        font-size: 1.25rem;
        color: ${textoBranco};
    }
`