import { useState } from "react";
import { StyledCabecalho } from "./styles";
import { Spin as Hamburger } from "hamburger-react";
import { ListaNav } from "./ListaNav";

export const Cabecalho = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledCabecalho>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <nav>
        <ListaNav aberto={isOpen}/>
      </nav>
        <h1>Fabiano Raiser</h1>
    </StyledCabecalho>
  );
};
