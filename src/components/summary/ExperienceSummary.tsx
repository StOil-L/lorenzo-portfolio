import Technology, {type TechnologyProps} from "./Technology.tsx";
import Task, {type TaskProps} from "./Task.tsx";
import {displayDate} from "../../util/misc.ts";
import {useEffect, useRef} from "react";

export interface ExperienceSummaryProps {
  title: string,
  imgsrc?: string,
  company: string,
  city?: string,
  mission: string,
  tasks?: TaskProps[],
  technologies?: TechnologyProps[],
  startDate: string | Date;
  endDate: string | Date;
  link?: string;
  isAlt?: boolean,
}

function ExperienceSummary(props: ExperienceSummaryProps) {

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
        <div className="essential-info">
          <div className="text">
            <h2>{props.title}</h2>
            {props.company && (<h3>{props.company}{props.city && `, ${props.city}`}</h3>)}
            <h4>Du {displayDate(props.startDate)} au {displayDate(props.endDate)}</h4>
          </div>
          {props.imgsrc && (
            <img src={props.imgsrc} alt={`Logo ${props.company}`}/>
          )}
        </div>
        <p><b>{props.mission}</b></p>
        {props.tasks && (
          <ul>
            {props.tasks.map((task, index) => {
              return <li key={index}><Task key={index} task={task.task} subtasks={task.subtasks} /></li>
            })}
          </ul>
        )}
      </section>
      {props.technologies && (
        <>
          <h3>Environnement</h3>
          <div ref={technoRef} className="technologies">
            {props.technologies.map((technology: TechnologyProps, i: number) => {
              return <Technology key={i} name={technology.name} icon={technology.icon}
                                 color={technology.color} highlight={technology.highlight} />
            })}
          </div>
        </>
      )}
      {props.link && (<a href={props.link}>En savoir plus</a>)}
    </div>
  )
}

export default ExperienceSummary