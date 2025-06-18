import '../stylesheets/MainLayout.css'
import NavigationMenu from "./NavigationMenu.tsx";
import {Outlet} from "react-router";

function MainLayout() {
  return (
    <>
      <NavigationMenu />
      <div id="page-content">
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout;