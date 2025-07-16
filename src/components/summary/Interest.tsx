import '../../stylesheets/Interest.css';
import CarouselWrapper from "../carousel/CarouselWrapper.tsx";
import type {CarouselSlideProps} from "../carousel/CarouselSlide.tsx";

export interface InterestProps {
  id: string,
  name: string,
  paragraphs: string | string[],
  slides: CarouselSlideProps[],
  isAlt?: boolean,
}

function Interest(props: InterestProps) {

  return (
    <div className={`interest${props.isAlt ? " alt" : ""}`} id={props.id}>
      <h2>{props.name}</h2>
      {Array.isArray(props.paragraphs) ? props.paragraphs.map((paragraph, i) => {
        return <p key={i}>{paragraph}</p>
      }) : props.paragraphs}
      <CarouselWrapper slides={props.slides} sideDisplay={true} textSide={props.isAlt? "left" : "right"} />
    </div>
  )
}

export default Interest;