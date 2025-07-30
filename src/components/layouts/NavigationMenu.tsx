import {Link} from "react-router";
import DarkModeToggle from "./DarkModeToggle.tsx";
import {getCookie, setPageCookie} from "../../util/cookies.ts";
import {useContext, useEffect} from "react";
import {isHrefMatching} from "../../util/misc.ts";
import {siteRouteIds, siteRouteNames} from "../../assets/config/SiteRoutes.ts";
import {AuthorizedCookies, type ContextState, CurrentPage} from "../../util/contexts.ts";

function NavigationMenu() {

  const acceptCookies = useContext<ContextState<number>>(AuthorizedCookies);
  const currentPageValue = useContext<ContextState<string>>(CurrentPage);

  useEffect(() => {
    let pageFound: boolean = false;
    let i = 0;
    while(i < siteRouteIds.length && !pageFound) {
      const currentRoute = siteRouteIds[i];
      const selectedElt = document.getElementById(currentRoute);
      if(currentPageValue.state === currentRoute) {
        selectedElt?.setAttribute("class", `${currentRoute} selected`);
        pageFound = true;
      }
      i++;
    }
    setPageCookie(currentPageValue.state);
  }, [currentPageValue.state]);

  return (
    <nav>
      {siteRouteIds.map((routeId, index) => {
        return <Link key={index} id={routeId} className={isHrefMatching(routeId) ? "selected" : ""}
                     to={routeId} onClick={() => currentPageValue.action!(routeId)}>
          {siteRouteNames[index]}
        </Link>
      })}
      {(getCookie("cookiesaccept") === 'true' // on page reload
        || (acceptCookies.state > 0)) // on cookies accepted (value becomes 1)
        && <DarkModeToggle />}
    </nav>
  )
}

export default NavigationMenu