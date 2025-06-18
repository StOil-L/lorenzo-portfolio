import {Link} from "react-router";
import DarkModeToggle from "./DarkModeToggle.tsx";

function NavigationMenu() {
  return (
    <nav>
      <Link to="">Accueil</Link>
      <Link to="aboutme">A propos de moi</Link>
      <Link to="projects">Projets</Link>
      <Link to="certifications">Certifications</Link>
      <DarkModeToggle />
    </nav>
  )
}

export default NavigationMenu