import '../stylesheets/Technology.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";

export interface TechnologyProps {
  name: string,
  icon: IconDefinition | string,
  color?: string,
  highlight?: boolean,
}

function isIconDefinition(icon: IconDefinition | string): icon is IconDefinition {
  return (icon as IconDefinition).icon !== undefined;
}

function Technology(props: TechnologyProps) {

  return (
    <div className="technology" title={props.name}>
      {isIconDefinition(props.icon) ? (
        <FontAwesomeIcon icon={props.icon as IconDefinition} style={{color: props.color}} size="4x" />
      ) : (
          <img className={props.highlight ? "highlight" : ""} src={props.icon} alt={`Logo ${props.name}`} />
      )}
    </div>
  )
}

export default Technology