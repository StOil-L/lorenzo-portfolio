import {Link} from "react-router";
import DarkModeToggle from "./DarkModeToggle.tsx";

function NavigationMenu() {
  return (
    <nav>
      <Link to="">Accueil</Link>
      <Link to="aboutme">A propos de moi</Link>
      <Link to="projects">Projets</Link>
      <Link to="education">Formation</Link>
      <Link to="experience">Expérience professionnelle</Link>
      <Link to="contact">Contact</Link>
      <DarkModeToggle />
    </nav>
  )
}

export default NavigationMenu