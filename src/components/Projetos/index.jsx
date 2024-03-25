import { CardProjeto } from "./CardProjeto";
import projetos from "@/mocks/projetos.json";
import { ListaProjetos, StyledProjetos } from "./styles";

export const Projetos = () => {
  console.log(projetos.projects);
  return (
    <StyledProjetos>
      <h2>Projetos</h2>
      <ListaProjetos>
        {projetos.projects.map((project) => {
          return <CardProjeto key={project.id} project={project} />;
        })}
      </ListaProjetos>
    </StyledProjetos>
  );
};
