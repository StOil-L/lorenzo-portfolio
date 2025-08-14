import {manualReverse} from "../../util/misc.ts";
import {experience} from "../../assets/summary/Experience.ts";
import ExperienceSummary, {type ExperienceSummaryProps} from "../summary/ExperienceSummary.tsx";
import GenericPage from "./GenericPage.tsx";

function ExperiencePage() {

  return (
    <GenericPage header={{
      imgsrc: "",
      children: "",
    }} route="experience">
      {(manualReverse(experience) as ExperienceSummaryProps[])
        .map((exp, i: number) => {
          return (
            <div key={i}>
              {i == 0 && <div className='summary-transition' />}
              <ExperienceSummary key={i} title={exp.title} imgsrc={exp.imgsrc}
                                 company={exp.company} city={exp.city} mission={exp.mission}
                                 tasks={exp.tasks} technologies={exp.technologies}
                                 startDate={exp.startDate} endDate={exp.endDate}
                                 link={exp.link} isAlt={i % 2 == 0} />
              {(i < experience.length-1 || (i < experience.length && i % 2 == 0)) &&
                  <div className={`summary-transition${i % 2 == 0 ? ' alt' : ''}`} />}
            </div>
          )
        })}
    </GenericPage>
  )
}

export default ExperiencePage