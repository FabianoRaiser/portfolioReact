import styled from "styled-components";
import { textoBranco, corFundo } from "@/styles/variaveisCSS.js";

export const StyledProjetos = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px;

  align-items: center;

  h2 {
    color: ${textoBranco};
    margin-bottom: 16px;
    text-transform: uppercase;
  }
`;

export const ListaProjetos = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  h2 {
    border-bottom: 2px solid ${corFundo};
    padding-bottom: 8px;
  }
`;
