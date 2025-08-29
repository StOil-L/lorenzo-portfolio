import GenericPage from "./GenericPage.tsx";
import siteRoutes from "../../assets/config/SiteRoutes.ts";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import ContactButton from "../ContactButton.tsx";
import {faPhone} from "@fortawesome/free-solid-svg-icons";

function ContactPage() {

  return (
    <GenericPage header={{
      imgsrc: "",
      children: siteRoutes.get("contact") as string,
    }} route="contact">
      <div id="explanation">
        <b>
          <h3>Besoin d'un renseignement ou envie de faire un retour sur mon parcours, mes réalisations ou ce site web ? Contactez-moi via les liens ci-dessous :</h3>
        {/*  <p>Je suis généralement disponible du lundi au vendredi de 10h à 12h, puis de 14h à 17h. Vous pouvez me joindre via mon profil LinkedIn, mon adresse mail ou mon numéro de téléphone.</p>*/}
        </b>
        {/*<p>Je ne serai cependant <b>pas disponible</b> pour un appel téléphonique aux dates suivantes :</p>*/}
        {/*<ul>*/}
        {/*  <li><b>Jeudi 21 août</b> après-midi</li>*/}
        {/*</ul>*/}
        <div className="contacts">
          <ContactButton baseHref={"https://www.linkedin.com/in/"} contactType={"linkedin"}
                         icon={faLinkedin} isWebsite={true}/>
          <ContactButton baseHref={"mailto:"} contactType={"email"} icon={faEnvelope} />
          <ContactButton baseHref={"tel:"} contactType={"phone"} icon={faPhone}/>
        </div>
      </div>
    </GenericPage>
  )
}

export default ContactPage