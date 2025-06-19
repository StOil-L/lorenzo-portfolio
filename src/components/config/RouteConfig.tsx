import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "../pages/HomePage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import AboutMePage from "../pages/AboutMePage.tsx";
import ProjectsPage from "../pages/ProjectsPage.tsx";
import EducationPage from "../pages/EducationPage.tsx";
import InterestsPage from "../pages/InterestsPage.tsx";
import ContactPage from "../pages/ContactPage.tsx";

function RouteConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="lorenzo-portfolio" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="aboutme" element={<AboutMePage />}/>
          <Route path="projects" element={<ProjectsPage />}/>
          <Route path="education" element={<EducationPage />}/>
          <Route path="interests" element={<InterestsPage />}/>
          <Route path="contact" element={<ContactPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteConfig;