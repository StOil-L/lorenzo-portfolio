import PortfolioHeader from "../layouts/PortfolioHeader.tsx";
import {manualReverse} from "../../util/misc.ts";
import {experience} from "../../assets/Experience.ts";
import ExperienceSummary, {type ExperienceSummaryProps} from "../summary/ExperienceSummary.tsx";

function ExperiencePage() {
  return (
    <>
      <PortfolioHeader>Expérience professionnelle</PortfolioHeader>
      {(manualReverse(experience) as ExperienceSummaryProps[])
        .map((experience, i: number) => {
          return <ExperienceSummary key={i} title={experience.title} imgsrc={experience.imgsrc}
                                    company={experience.company} city={experience.city} mission={experience.mission}
                                    tasks={experience.tasks} technologies={experience.technologies}
                                    startDate={experience.startDate} endDate={experience.endDate}
                                    link={experience.link} isAlt={i % 2 == 0} />
        })}
    </>
  )
}

export default ExperiencePage