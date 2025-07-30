import GenericPage from "./GenericPage.tsx";
import siteRoutes from "../../assets/config/SiteRoutes.ts";

function ContactPage() {

  return (
    <GenericPage header={{
      imgsrc: "",
      children: siteRoutes.get("contact") as string,
    }} route="contact">
      Ceci est une page de contact générique. Je vais la mettre à jour.
    </GenericPage>
  )
}

export default ContactPage