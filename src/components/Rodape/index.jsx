import { LogoRodape, StyledRodape } from "./styles";
import logo from "@/assets/logo_isolado.svg";

export const Rodape = () => {
    return (
        <StyledRodape>
            <LogoRodape src={logo} />
            <p>
                Desenvolvido por Fabiano Raiser. © 2024.
            </p>
            <p>Imagem de logo criada com Bing Image Creator</p>
        </StyledRodape>
    )
}