import '../stylesheets/ContactButton.css';
import type {IconDefinition, IconProp} from "@fortawesome/fontawesome-svg-core";
import {contactInfo} from "../assets/ContactInfo.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import type {PhoneIconDefinition} from "../assets/config/PhoneIconDefinition.ts";

interface ContactButtonProps {
  baseHref: string,
  contactType: string,
  icon?: IconDefinition | PhoneIconDefinition,
  isWebsite?: boolean;
}

function ContactButton(props: ContactButtonProps) {
  return (
    <a href={props.baseHref + contactInfo.get(props.contactType)} target={props.isWebsite? "_blank" : ""}>
      {props.icon && (<FontAwesomeIcon icon={props.icon as IconProp}/>)}
      {props.icon && '\t'}
      {contactInfo.get(props.contactType)}
    </a>
  )
}

export default ContactButton;