import "../stylesheets/CarouselSlide.css";
import * as React from "react";

export interface CarouselSlideProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  url: string;
  alt: string;
}

export function CarouselSlide (props: CarouselSlideProps) {
  return (
    <div ref={props.ref} className="slide">
      <img src={props.url} alt={props.alt} />
    {/* TODO: ajouter bloc de texte (titre, description) */}
    </div>
  )
}