import PortfolioHeader from "../layouts/PortfolioHeader.tsx";
import {projects} from "../../assets/summary/Projects.ts";
import ProjectSummary, {type ProjectSummaryProps} from "../summary/ProjectSummary.tsx";
import {manualReverse} from "../../util/misc.ts";

function ProjectsPage() {

  return (
    <>
      <PortfolioHeader imgsrc="photos/projects.jpg">Projets</PortfolioHeader>
      <div id="page-info-transition" />
      <div id="page-info">
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
      </div>
    </>
  )
}

export default ProjectsPage