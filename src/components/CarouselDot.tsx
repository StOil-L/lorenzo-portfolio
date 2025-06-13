import "../stylesheets/CarouselDot.css";
import * as React from "react";

export interface CarouselDotProps {
  ref?: React.Ref<HTMLSpanElement>;
  index: number;
  activeClass: string;
}

function CarouselDot(props: CarouselDotProps) {
  return (
    // TODO: rendre les points cliquables (depuis CarouselWrapper)
    <span ref={props.ref} data-slideid={props.index} className={"dot " + props.activeClass} />
  )
}

export default CarouselDot