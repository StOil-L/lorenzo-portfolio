import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons/faUser";

export interface CollaboratorProps {
  name: string;
  profilepage?: string;
  imgsrc?: string;
}

function Collaborator(props: CollaboratorProps) {
  return (
    <div className="collaborator">
      {props.imgsrc ? (
        <img src={props.imgsrc} alt={`Photo de profil ${props.name}`}/>
      ) : (
        <FontAwesomeIcon icon={faUser} size="6x" />
      )}
      {props.profilepage ? (
        <h4><a className="profilepage" href={props.profilepage}>{props.name}</a></h4>
      ) : (
        <h4 className="collaborator-name">{props.name}</h4>
      )}
    </div>
  )
}

export default Collaborator;