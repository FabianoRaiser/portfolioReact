import { StyledCardProj } from "./styles";

export const CardProjeto = ({ project }) => {
  return (
    <StyledCardProj>
      <a href={project.link}>
        <img
          src={`/src/assets/projetosImg/${project.banner}`}
          alt="Imagem de capa do Projeto"
        />
        <div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <span>Tecnologias utilizadas: {project.techs}</span>
        </div>
      </a>
    </StyledCardProj>
  );
};
