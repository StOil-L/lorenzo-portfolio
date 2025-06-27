import Technology, {type TechnologyProps} from "./Technology.tsx";

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

const localDateOptions: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
  year: "numeric"
};

function EducationSummary(props: EducationSummaryProps) {
  return (
    <div className={`summary${props.isAlt ? ' alt' : ''}`}>
      <section>
        <h2>{props.title}</h2>
        {props.school && (<h3>{props.school}{props.city && `, ${props.city}`}</h3>)}
        {props.obtentionDate && (
          <h4>Obtenu le {typeof props.obtentionDate === 'string'?
            props.obtentionDate : (props.obtentionDate as Date)
              .toLocaleDateString(undefined, localDateOptions)}</h4>
        )}
        {props.imgsrc && (
          <img src={props.imgsrc} alt={`Logo ${props.school}`}/>
        )}
        <p>{props.description}</p>
      </section>
      {props.technologies && (
        <>
          <h3>Technologies enseignées</h3>
          <div className="technologies">
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