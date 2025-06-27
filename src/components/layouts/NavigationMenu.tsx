import {Link} from "react-router";
import DarkModeToggle from "./DarkModeToggle.tsx";
import type {ForceRerender} from "./MainLayout.tsx";
import {getCookie} from "../../util/cookies.ts";

function NavigationMenu(props: ForceRerender) {
  return (
    <nav>
      <Link to="">Accueil</Link>
      <Link to="aboutme">A propos de moi</Link>
      <Link to="projects">Projets</Link>
      <Link to="education">Formation</Link>
      <Link to="experience">Expérience professionnelle</Link>
      <Link to="contact">Contact</Link>
      {(getCookie("cookiesaccept") === 'true' // on page reload
        || (props.value > 0)) // on cookies accepted (value becomes 1)
        && <DarkModeToggle />}
    </nav>
  )
}

export default NavigationMenu