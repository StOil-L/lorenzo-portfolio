import PortfolioHeader from "../layouts/PortfolioHeader.tsx";
import {projects} from "../../assets/project/Projects.ts";
import ProjectSummary from "../ProjectSummary.tsx";

function ProjectsPage() {

  const reversedList = projects.reverse();

  return (
    <>
      <PortfolioHeader>Projets</PortfolioHeader>
      {reversedList.map(project => {
        return (
          <ProjectSummary title={project.title} description={project.description}
                          technologies={project.technologies} imgsrc={project.imgsrc}
                          collaborators={project.collaborators} link={project.link} />
        )
      })}
    </>
  )
}

export default ProjectsPage