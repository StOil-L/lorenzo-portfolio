import {BrowserRouter, Route, Routes} from "react-router";
import App from "../App.tsx";
import MainLayout from "./MainLayout.tsx";

function RouteConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="lorenzo-portfolio" element={<MainLayout />}>
          <Route index element={<App />} />
          {/* TODO: ajouter element pour chaque route du menu */}
          <Route path="aboutme" />
          <Route path="projects" />
          <Route path="certifications" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteConfig;