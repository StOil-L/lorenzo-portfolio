import {projects} from "../../assets/summary/Projects.ts";
import ProjectSummary, {type ProjectSummaryProps} from "../summary/ProjectSummary.tsx";
import {manualReverse} from "../../util/misc.ts";
import siteRoutes from "../../assets/config/SiteRoutes.ts";
import GenericPage from "./GenericPage.tsx";

function ProjectsPage() {

  return (
    <GenericPage header={{
      imgsrc: "",
      children: siteRoutes.get("projects") as string,
    }} route="projects">
      {(manualReverse(projects) as ProjectSummaryProps[])
        .map((project, i: number) => {
          return (
            <div key={i}>
              {i == 0 && <div className='summary-transition' />}
              <ProjectSummary key={i} title={project.title} description={project.description}
                              technologies={project.technologies} imgsrc={project.imgsrc}
                              collaborators={project.collaborators} link={project.link} isAlt={i % 2 == 0}/>
              {i < projects.length-1 && <div className={`summary-transition${i % 2 == 0 ? ' alt' : ''}`} />}
            </div>
          )
        })}
    </GenericPage>
  )
}

export default ProjectsPage