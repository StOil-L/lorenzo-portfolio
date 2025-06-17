import "../stylesheets/CarouselSlide.css";
import * as React from "react";

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
        <div className="text">
          <div className="margin-applier">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            {props.link && (<a href={props.link}>En savoir plus</a>)}
          </div>
        </div>
      )}
    </div>
  )
}