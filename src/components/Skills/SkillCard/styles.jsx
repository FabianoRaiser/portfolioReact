import styled from "styled-components";
import { textoBranco } from "@/styles/variaveisCSS";
import { verdeEscuro } from "@/styles/variaveisCSS";

export const StyledSkillsCard = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${verdeEscuro};
  border-radius: 24px;
  padding: 32px;
  gap: 16px;

  color: ${textoBranco};

  align-items: center;
`;

export const TecUl = styled.ul`
  display: flex;
  gap: 8px;
`;

export const TextUl = styled.ul`
    li {
        list-style: disc;
    }
`
