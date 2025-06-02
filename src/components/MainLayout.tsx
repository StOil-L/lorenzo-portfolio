import NavigationMenu from "./NavigationMenu.tsx";
import {Outlet} from "react-router";

function MainLayout() {
  return (
    <>
      <NavigationMenu />
      <Outlet />
    </>
  )
}

export default MainLayout;