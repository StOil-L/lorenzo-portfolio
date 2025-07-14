import "../../stylesheets/CarouselSlide.css";
import * as React from "react";
import CarouselSlideText from "./CarouselSlideText.tsx";

export interface CarouselSlideProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  imgurl: string;
  imgalt: string;
  title?: string;
  description?: string;
  link?: string;
}

export function CarouselSlide (props: CarouselSlideProps) {
  return (
    <div ref={props.ref} className="slide">
      <img src={props.imgurl} alt={props.imgalt} />
      {props.title && props.description && (
        <CarouselSlideText title={props.title} description={props.description} link={props.link} />
      )}
    </div>
  )
}