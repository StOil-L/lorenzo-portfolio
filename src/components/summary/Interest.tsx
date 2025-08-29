import '../../stylesheets/Summary.css';
import CarouselWrapper from "../carousel/CarouselWrapper.tsx";
import type {CarouselSlideProps} from "../carousel/CarouselSlide.tsx";

export interface InterestProps {
  id: string,
  name: string,
  // paragraphs: string | string[],
  slides: CarouselSlideProps[],
  // isAlt?: boolean,
  displayTitle?: boolean,
}

function Interest(props: InterestProps) {

  return (
    <div className="interest" id={props.id}>
      {props.displayTitle && <h2>{props.name}</h2>}
      {/*{Array.isArray(props.paragraphs) ? props.paragraphs.map((paragraph, i) => {*/}
      {/*  return <p key={i}>{paragraph}</p>*/}
      {/*}) : props.paragraphs}*/}
      <CarouselWrapper slides={props.slides} />
    </div>
  )
}

export default Interest;