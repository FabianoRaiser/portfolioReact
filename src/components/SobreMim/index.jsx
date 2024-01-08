import { sobreMim } from "@/mocks/sobreMim.json";
import perfilFoto from "@/assets/fotoPerfil_semFundo.png"
import { PerfilFoto, SobreMimDescr, StyledSobreMim } from "./styles";

export const SobreMim = () => {
  return (
    <StyledSobreMim>
        <h2>Sobre Mim</h2>
      <SobreMimDescr>
        <p>{sobreMim}</p>
      <div>
        <PerfilFoto src={perfilFoto} />
      </div>
      </SobreMimDescr>
    </StyledSobreMim>
  );
};
