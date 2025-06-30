import {Link} from "react-router";
import DarkModeToggle from "./DarkModeToggle.tsx";
import {getCookie, setCookie} from "../../util/cookies.ts";
import {useEffect, useState} from "react";
import {isHrefMatching} from "../../util/misc.ts";
import type {ForceRerender} from "./MainLayout.tsx";

function NavigationMenu(props: ForceRerender) {

  const [currentPage, setCurrentPage] = useState(getCookie("currentpage") === undefined ? ""
    : getCookie("currentpage"));
  const routes = ["", "aboutme", "projects", "education", "experience", "contact"];
  const routeNames = ["Accueil", "A propos de moi", "Projets", "Formation",
    "Expérience professionnelle", "Contact"];

  useEffect(() => {
    routes.forEach((route) => {
      const selectedElt = document.getElementById(route);
      if(currentPage === route) {
        selectedElt?.setAttribute("class", `${route} selected`);
      } else {
        selectedElt?.setAttribute("class", "");
      }
    })
    if(getCookie("cookiesaccept") === 'true')
      setCookie("currentpage", currentPage as string)
  }, [currentPage]);

  return (
    <nav>
      {routes.map((route, index) => {
        return <Link key={index} id={route} className={isHrefMatching(route) ? "selected" : ""}
                     to={route} onClick={() => setCurrentPage(route)}>{routeNames[index]}</Link>
      })}
      {(getCookie("cookiesaccept") === 'true' // on page reload
        || (props.value > 0)) // on cookies accepted (value becomes 1)
        && <DarkModeToggle />}
    </nav>
  )
}

export default NavigationMenu