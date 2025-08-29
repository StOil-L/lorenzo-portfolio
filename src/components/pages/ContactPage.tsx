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
          <h3>Besoin d'un renseignement ou envie de faire un retour sur mon parcours ou mes réalisations ? Contactez-moi via les liens ci-dessous :</h3>
        </b>
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