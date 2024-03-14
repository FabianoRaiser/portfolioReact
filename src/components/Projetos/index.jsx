import { CardProjeto } from "./CardProjeto"
import projetos from "@/mocks/projetos.json"

export const Projetos = () => {
    console.log(projetos.projects)
    return (
        <>
        {projetos.projects.map((project) =>{
            return <CardProjeto key={project.id} project={project} />
        } )}
        </>
    )
}