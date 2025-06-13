import {Link} from "react-router";
import DarkModeToggle from "./DarkModeToggle.tsx";

function NavigationMenu() {
  return (
    <nav>
      <Link to="aboutme">A propos de moi</Link> {'\t'}
      <Link to="projects">Projets</Link> {'\t'}
      <Link to="certifications">Certifications</Link> {'\t'}
      <DarkModeToggle />
    </nav>
  )
}

export default NavigationMenu