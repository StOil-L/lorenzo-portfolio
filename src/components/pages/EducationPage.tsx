import PortfolioHeader from "../layouts/PortfolioHeader.tsx";
import {manualReverse} from "../../util/misc.ts";
import {education} from "../../assets/Education.ts";
import EducationSummary, {type EducationSummaryProps} from "../EducationSummary.tsx";

function EducationPage() {
  return (
    <>
      <PortfolioHeader>Formation</PortfolioHeader>
      {(manualReverse(education) as EducationSummaryProps[])
        .map((education, i: number) => {
        return <EducationSummary key={i} title={education.title} description={education.description}
                                 imgsrc={education.imgsrc} school={education.school} city={education.city}
                                 technologies={education.technologies} results={education.results}
                                 obtentionDate={education.obtentionDate} link={education.link}
                                 isAlt={i % 2 == 0} />
      })}
    </>
  )
}

export default EducationPage