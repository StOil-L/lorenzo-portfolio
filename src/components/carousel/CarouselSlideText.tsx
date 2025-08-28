interface CarouselSlideTextProps {
  title: string,
  description?: string,
  link?: string,
}

function CarouselSlideText(props: CarouselSlideTextProps) {
  return (
    <div className="text">
      <div className="margin-applier">
        <h3>{props.title}</h3>
        {props.description && <p>{props.description}</p>}
        {props.link && (<a href={props.link}>En savoir plus</a>)}
      </div>
    </div>
  )
}

export default CarouselSlideText