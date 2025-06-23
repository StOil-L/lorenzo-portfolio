import Collaborator, {type CollaboratorProps} from "./Collaborator.tsx";
import Technology, {type TechnologyProps} from "./Technology.tsx";

export interface ProjectSummaryProps {
  title: string;
  imgsrc?: string;
  description: string;
  collaborators?: CollaboratorProps[];
  technologies: TechnologyProps[];
  link?: string;
}

function ProjectSummary(props: ProjectSummaryProps) {
  return (
    <>
      <section>
        <h2>{props.title}</h2>
        {props.imgsrc && (
          <img src={props.imgsrc} alt={`Image pour projet : ${props.title}`}/>
        )}
        <p>{props.description}</p>
      </section>
      {props.collaborators && (<h3>Collaborateurs</h3>)}
      {props.collaborators && props.collaborators.map((collaborator: CollaboratorProps) => {
        return <Collaborator name={collaborator.name}
                             imgsrc={collaborator.imgsrc} profilepage={collaborator.profilepage} />
      })}
      <h3>Technologies utilisées</h3>
      {props.technologies.map((technology: TechnologyProps) => {
        return <Technology name={technology.name} icon={technology.icon} color={technology.color} />
      })}
      {props.link && (<a href={props.link}>En savoir plus</a>)}
    </>
  )
}

export default ProjectSummary