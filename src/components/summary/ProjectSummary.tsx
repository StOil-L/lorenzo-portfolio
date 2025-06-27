import '../../stylesheets/ProjectSummary.css';
import Collaborator, {type CollaboratorProps} from "./Collaborator.tsx";
import Technology, {type TechnologyProps} from "./Technology.tsx";

export interface ProjectSummaryProps {
  title: string;
  imgsrc?: string;
  description: string;
  collaborators?: CollaboratorProps[];
  technologies: TechnologyProps[];
  link?: string;
  isAlt?: boolean;
}

function ProjectSummary(props: ProjectSummaryProps) {
  return (
    <div className={`summary${props.isAlt ? ' alt' : ''}`}>
      <section>
        <h2>{props.title}</h2>
        {props.imgsrc && (
          <img src={props.imgsrc} alt={`Image pour projet : ${props.title}`}/>
        )}
        <p>{props.description}</p>
      </section>
      {props.collaborators && (
        <>
          <h3>Collaborateurs</h3>
          <div className="collaborators">
            {props.collaborators.map((collaborator: CollaboratorProps, i: number) => {
              return <Collaborator key={i} name={collaborator.name}
                                   imgsrc={collaborator.imgsrc} profilepage={collaborator.profilepage} />
            })}
          </div>
        </>
      )}
      <h3>Technologies utilisées</h3>
      <div className="technologies">
        {props.technologies.map((technology: TechnologyProps, i: number) => {
          return <Technology key={i} name={technology.name} icon={technology.icon}
                             color={technology.color} highlight={technology.highlight} />
        })}
      </div>
      {props.link && (<a href={props.link}>En savoir plus</a>)}
    </div>
  )
}

export default ProjectSummary