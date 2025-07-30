import '../../stylesheets/MainLayout.css'
import '../../stylesheets/Summary.css'
import NavigationMenu from "./NavigationMenu.tsx";
import {Outlet} from "react-router";
import CookiesNotice from "./CookiesNotice.tsx";
import {acContextInitialState, AuthorizedCookies, cpContextInitialState, CurrentPage} from "../../util/contexts.ts";
import {useState} from "react";

function MainLayout() {

  const [acceptCookies, setAcceptCookies] = useState<number>(acContextInitialState);
  const [currentPage, setCurrentPage] = useState<string>(cpContextInitialState);

  return (
    <AuthorizedCookies value={{
      state: acceptCookies,
      action: setAcceptCookies,
    }}>
      <CurrentPage value={{
        state: currentPage,
        action: setCurrentPage,
      }}>
        <NavigationMenu />
        <div id="page-content">
          <Outlet />
        </div>
      </CurrentPage>
      <CookiesNotice />
    </AuthorizedCookies>
  )
}

export default MainLayout;