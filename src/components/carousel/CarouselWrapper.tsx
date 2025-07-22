import '../../stylesheets/CarouselWrapper.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleLeft, faCircleRight} from "@fortawesome/free-regular-svg-icons";
import {CarouselSlide, type CarouselSlideProps} from "./CarouselSlide.tsx";
import {useEffect, useRef, useState} from "react";
import CarouselDot from "./CarouselDot.tsx";
import CarouselSlideText from "./CarouselSlideText.tsx";

interface CarouselWrapperProps {
  slides: CarouselSlideProps[];
  autoScroll?: boolean;
  sideDisplay?: boolean;
  textSide?: string;
}

function CarouselWrapper(props: CarouselWrapperProps) {

  const slidesRef = useRef<HTMLDivElement[]>([]);
  const dotsRef = useRef<HTMLSpanElement[]>([]);
  const intervalRef = useRef(0);
  const [isStopped, setIsStopped] = useState(false);
  const currentSlide = useRef(0);
  const [currentSlideContent, setCurrentSlideContent] = useState(props.slides[0]);
  const startX = useRef(-1);
  const endX = useRef(-1);

  const slideTo = (index: number) => {
    currentSlide.current = index >= props.slides.length ? 0 : (index < 0 ? props.slides.length-1 : index);
    slidesRef.current.forEach((slide) => {
      slide.style.transform = `translateX(-${100*currentSlide.current}%)`;
    })
    dotsRef.current.forEach((dot: HTMLSpanElement, i: number) => {
      dot.classList = `dot ${i == currentSlide.current ? "active" : "inactive"}`;
    })
    setCurrentSlideContent(props.slides[currentSlide.current]);
  }

  const slidesText = props.sideDisplay && (
    <CarouselSlideText title={currentSlideContent.title!} description={currentSlideContent.description!}
                       link={currentSlideContent.link} />
  )

  useEffect(() => {
    if(!isStopped && props.autoScroll) intervalRef.current = setInterval(() => {
      slideTo(++currentSlide.current)
    }, 5000)
    return () => clearInterval(intervalRef.current)
  }, [isStopped])

  useEffect(() => {
    dotsRef.current.forEach((dot: HTMLSpanElement, i: number) => {
      dot.addEventListener('click', () => slideTo(i))
    })
    slidesRef.current.forEach((slide) => {
      slide.style.transform = `translateX(-${100*currentSlide.current}%)`;
      slide.style.background = `center/cover url(${(slide.firstChild as HTMLImageElement).src})`;
    })
    return dotsRef.current.forEach((dot: HTMLSpanElement, i: number) => {
      dot.removeEventListener('click', () => slideTo(i))
    })
  }, []);

  return props.slides.length > 0 && (
    <div className="carousel-wrapper">
      {props.textSide === 'left' && slidesText}
      <div className={`carousel${props.sideDisplay ? " side" : ""}`}
           onMouseEnter={() => setIsStopped(true)}
           onMouseLeave={() => setIsStopped(false)}
           onTouchStart={(event) => startX.current = event.touches[0].clientX}
           onTouchEnd={(event) => {
             endX.current = event.changedTouches[0].clientX;
             if(startX.current > endX.current + 0.2*window.screen.width) slideTo(++currentSlide.current);
             else if(startX.current < endX.current - 0.2*window.screen.width) slideTo(--currentSlide.current);
           }}
      >
        <div className="carousel-content">
          {props.slides.map((slide: CarouselSlideProps, i: number) => {
            return <CarouselSlide key={i} ref={(elt) => {
              if (elt) slidesRef.current[i] = elt;
            }} imgurl={slide.imgurl} imgalt={slide.imgalt} title={!props.sideDisplay ? slide.title : undefined}
                                  description={!props.sideDisplay ? slide.description : undefined} link={slide.link} />
          })}
        </div>
        <div className="carousel-controls">
          <button id="prev" onClick={() => slideTo(--currentSlide.current)}>
            <FontAwesomeIcon icon={faCircleLeft} />
          </button>
          <button id="next" onClick={() => slideTo(++currentSlide.current)}>
            <FontAwesomeIcon icon={faCircleRight} />
          </button>
        </div>
        <div className="carousel-dots">
          {props.slides.map((_slide, i: number) => {
            const dotClass: string = i == currentSlide.current ? 'active' : 'inactive';
            return <CarouselDot key={i} ref={(elt) => {
              if (elt) dotsRef.current[i] = elt;
            }} index={i} activeClass={dotClass} />
          })}
        </div>
      </div>
      {(props.textSide === 'right' || !props.textSide) && slidesText}
    </div>
  )
}

export default CarouselWrapper