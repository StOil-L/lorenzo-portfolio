import '../../stylesheets/ProjectSummary.css';
import Collaborator, {type CollaboratorProps} from "./Collaborator.tsx";
import Technology, {type TechnologyProps} from "./Technology.tsx";
import {useEffect, useRef} from "react";

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

  const technoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observableTechnos = technoRef.current;
    if(!observableTechnos) return;
    const observer = new ResizeObserver((entries) => {
      const technoElement = (entries[0].target as HTMLDivElement);
      technoElement.style.justifyContent = technoElement.offsetHeight > 80? "space-evenly" : "flex-start";
    })
    observer.observe(observableTechnos);
    return () => observer.disconnect();
  }, []);

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
      <div ref={technoRef} className="technologies">
        {props.technologies.map((technology: TechnologyProps, i: number) => {
          return <Technology key={i} name={technology.name} icon={technology.icon}
                             color={technology.color} highlight={technology.highlight} />
        })}
      </div>
      {props.link && (<a href={props.link}>Voir le dépôt du projet</a>)}
    </div>
  )
}

export default ProjectSummary