import {manualReverse} from "../../util/misc.ts";
import {education} from "../../assets/summary/Education.ts";
import EducationSummary, {type EducationSummaryProps} from "../summary/EducationSummary.tsx";
import siteRoutes from "../../assets/config/SiteRoutes.ts";
import GenericPage from "./GenericPage.tsx";

function EducationPage() {

  return (
    <GenericPage header={{
      imgsrc: "",
      children: siteRoutes.get("education") as string,
    }} route="education">
      {(manualReverse(education) as EducationSummaryProps[])
        .map((edu, i: number) => {
          return (
            <div key={i}>
              {i == 0 && <div className='summary-transition' />}
              <EducationSummary key={i} title={edu.title} description={edu.description}
                                imgsrc={edu.imgsrc} school={edu.school} city={edu.city}
                                technologies={edu.technologies} results={edu.results}
                                obtentionDate={edu.obtentionDate} link={edu.link}
                                isAlt={i % 2 == 0} />
              {i < education.length-1 && <div className={`summary-transition${i % 2 == 0 ? ' alt' : ''}`} />}
            </div>
          )
        })}
    </GenericPage>
  )
}

export default EducationPage