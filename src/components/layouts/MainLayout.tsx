import '../../stylesheets/MainLayout.css'
import '../../stylesheets/Summary.css'
import NavigationMenu from "./NavigationMenu.tsx";
import {Outlet} from "react-router";
import CookiesNotice from "./CookiesNotice.tsx";
import {useState} from "react";

export interface ForceRerender {
  value: number;
}

export interface Rerenderer {
  callback: React.Dispatch<React.SetStateAction<number>>;
}

function MainLayout() {

  // Because we want NavigationMenu to be updated to render the DarkModeToggle component,
  // we pass a dummy useState to CookiesNotice which is triggered when pressing any of the buttons
  // and the value is updated back in MainLayout, then passed down to NavigationMenu again
  const [rerenderValue, forceRerender] = useState<number>(0);

  return (
    <>
      <NavigationMenu value={rerenderValue} />
      <div id="page-content">
        <Outlet />
      </div>
      <CookiesNotice callback={forceRerender} />
    </>
  )
}

export default MainLayout;