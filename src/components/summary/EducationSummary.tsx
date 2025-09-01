import Technology, {type TechnologyProps} from "./Technology.tsx";
import {displayDate} from "../../util/misc.ts";
import {useEffect, useRef} from "react";

export interface EducationSummaryProps {
  title: string,
  imgsrc?: string,
  school?: string,
  city?: string,
  description: string,
  technologies?: TechnologyProps[],
  results?: string,
  obtentionDate?: string | Date;
  link?: string,
  isAlt?: boolean,
}

function EducationSummary(props: EducationSummaryProps) {

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
            {props.school && (<h3>{props.school}{props.city && `, ${props.city}`}</h3>)}
            {props.obtentionDate && (
              <h4>Obtenu le {displayDate(props.obtentionDate)}</h4>
            )}
          </div>
          {props.imgsrc && (
            <img src={props.imgsrc} alt={`Logo ${props.school}`} />
          )}
        </div>
        <p>{props.description}</p>
      </section>
      {props.technologies && (
        <>
          <h3>Technologies enseignées</h3>
          <div ref={technoRef} className="technologies">
            {props.technologies.map((technology: TechnologyProps, i: number) => {
              return <Technology key={i} name={technology.name} icon={technology.icon}
                                 color={technology.color} highlight={technology.highlight} />
            })}
          </div>
        </>
      )}
      {props.results && (<h4>Résultats : {props.results}</h4>)}
      {props.link && (<a href={props.link}>En savoir plus</a>)}
    </div>
  )
}

export default EducationSummary;