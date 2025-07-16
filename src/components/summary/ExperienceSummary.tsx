import Technology, {type TechnologyProps} from "./Technology.tsx";
import Task, {type TaskProps} from "./Task.tsx";
import {displayDate} from "../../util/misc.ts";

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
          <div className="technologies">
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