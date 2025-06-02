import {Link} from "react-router";

function NavigationMenu() {
  return (
    <>
      <Link to="aboutme">A propos de moi</Link> {'\t'}
      <Link to="projects">Projets</Link> {'\t'}
      <Link to="certifications">Certifications</Link>
      {/* TODO: Implémenter composant de gestion du mode sombre */}
    </>
  )
}

export default NavigationMenu