import PortfolioHeader from "../layouts/PortfolioHeader.tsx";
import {projects} from "../../assets/project/Projects.ts";
import ProjectSummary, {type ProjectSummaryProps} from "../ProjectSummary.tsx";
import {manualReverse} from "../../util/misc.ts";

function ProjectsPage() {

  return (
    <>
      <PortfolioHeader>Projets</PortfolioHeader>
      {(manualReverse(projects) as ProjectSummaryProps[])
        .map((project, i: number) => {
        return <ProjectSummary key={i} title={project.title} description={project.description}
                          technologies={project.technologies} imgsrc={project.imgsrc}
                          collaborators={project.collaborators} link={project.link} isAlt={i % 2 == 0}/>
      })}
    </>
  )
}

export default ProjectsPage