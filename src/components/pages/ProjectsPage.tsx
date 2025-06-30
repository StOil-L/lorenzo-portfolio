import PortfolioHeader from "../layouts/PortfolioHeader.tsx";
import {projects} from "../../assets/project/Projects.ts";
import ProjectSummary, {type ProjectSummaryProps} from "../summary/ProjectSummary.tsx";
import {manualReverse} from "../../util/misc.ts";

function ProjectsPage() {

  return (
    <>
      <PortfolioHeader>Projets</PortfolioHeader>
      {(manualReverse(projects) as ProjectSummaryProps[])
        .map((project, i: number) => {
        return (
          <div key={i}>
            {i == 0 && <div className='summary-transition' />}
            <ProjectSummary key={i} title={project.title} description={project.description}
                            technologies={project.technologies} imgsrc={project.imgsrc}
                            collaborators={project.collaborators} link={project.link} isAlt={i % 2 == 0}/>
            {(i < projects.length-1 || i % 2 == 0) &&
                <div className={`summary-transition${i % 2 == 0 ? ' alt' : ''}`} />}
          </div>
        )
      })}
    </>
  )
}

export default ProjectsPage