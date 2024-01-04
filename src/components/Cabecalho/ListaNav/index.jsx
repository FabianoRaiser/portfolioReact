import { StyledLinksRedes, StyledListaNav } from "./styles";
import { linksRedes } from "@/mocks/linksRedes.json";

// eslint-disable-next-line react/prop-types
export const ListaNav = ({ aberto }) => {
  return (
    <StyledListaNav
      style={
        aberto
          ? { width: "100%", padding: "16px" }
          : { width: "0%", padding: "16px 0" }
      }
    >
      <div>
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Contato</li>
      </div>
      <StyledLinksRedes>
        {linksRedes.map((rede) => {
          return (
            <a key={rede.key} href={rede.link}>
              <img src={rede.imgPath} />
            </a>
          );
        })}
      </StyledLinksRedes>
    </StyledListaNav>
  );
};
