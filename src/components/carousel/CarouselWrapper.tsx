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

  const selfRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const dotsRef = useRef<HTMLSpanElement[]>([]);
  const intervalRef = useRef(0);
  const [isStopped, setIsStopped] = useState(false);
  const currentSlide = useRef(0);
  const [currentSlideContent, setCurrentSlideContent] = useState(props.slides[0]);
  const [displaySideOnRight, setDisplaySideOnRight] = useState(false);
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

  // Gestion du scrolling automatique
  useEffect(() => {
    if(!isStopped && props.autoScroll) intervalRef.current = setInterval(() => {
      slideTo(++currentSlide.current)
    }, 10000) // 10 secondes
    return () => clearInterval(intervalRef.current);
  }, [isStopped])

  // Attribution des refs + application transformation / background slides
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

  // Gestion de l'affichage du carousel
  useEffect(() => {
    const selfElement = selfRef.current;
    if (!selfElement) return;
    const observer = new ResizeObserver((entries) => {
      const wrapperRef = (entries[0].target as HTMLDivElement);
      const isSmall = wrapperRef.offsetWidth < 768;
      // direction du wrapper
      wrapperRef.style.flexDirection = isSmall ? "column" : "row";
      // largeur du carousel en sideDisplay
      if ((wrapperRef.firstChild! as HTMLDivElement).className == "carousel side")
        (wrapperRef.firstChild! as HTMLDivElement).style.width = isSmall ? "100%" : "50%";
      // mise des points en haut pour éviter overlap avec texte en bas
      (wrapperRef.firstChild!.lastChild! as HTMLDivElement).style.bottom = isSmall ? "unset" : "5%";
      (wrapperRef.firstChild!.lastChild! as HTMLDivElement).style.top = isSmall ? "5%" : "unset";
      // style de la zone de texte des slides
      slidesRef.current.forEach((slide) => {
        const textChild = slide.children[1] as HTMLDivElement;
        textChild.style.minHeight = isSmall ? "unset" : "35%";
        textChild.style.maxHeight = isSmall ? "45%" : "unset";
        textChild.style.top = isSmall ? "unset" : "55%";
        textChild.style.left = isSmall ? "unset" : "50%";
        textChild.style.bottom = isSmall ? "0" : "unset";
        textChild.style.width = isSmall ? "100%" : "45%";
        textChild.style.padding = isSmall ? "unset" : "0 1rem";
        const paragraphs = textChild.getElementsByTagName("p");
        for (let i = 0; i < paragraphs.length; i++) {
          paragraphs.item(i)!.style.lineHeight = isSmall ? "unset" : "2.25";
        }
      })
    })
    observer.observe(selfElement);
    return () => observer.disconnect();
  }, []);

  // Gestion de l'ordre d'affichage en mode side (pour responsivité)
  useEffect(() => {
    const checkForQuery =
      (event: MediaQueryListEvent | MediaQueryList) => setDisplaySideOnRight(event.matches);
    const mediaQuery = window.matchMedia("screen and (max-width: 880px)");
    if(mediaQuery.matches) checkForQuery(mediaQuery);
    mediaQuery.addEventListener("change", checkForQuery);
    return () => mediaQuery.removeEventListener("change", checkForQuery);
  }, []);

  return props.slides.length > 0 && (
    <div ref={selfRef} className="carousel-wrapper">
      {(props.textSide === 'left' && !displaySideOnRight) && slidesText}
      <div className={`carousel${props.sideDisplay ? " side" : ""}`}
           onMouseEnter={() => setIsStopped(true)}
           onMouseLeave={() => setIsStopped(false)}
           onTouchStart={(event) => {
             startX.current = event.touches[0].clientX;
             setIsStopped(true);
           }}
           onTouchEnd={(event) => {
             endX.current = event.changedTouches[0].clientX;
             if(startX.current > endX.current + 0.2*window.screen.width) slideTo(++currentSlide.current);
             else if(startX.current < endX.current - 0.2*window.screen.width) slideTo(--currentSlide.current);
             setIsStopped(false);
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
            <FontAwesomeIcon icon={faCircleLeft}/>
          </button>
          <button id="next" onClick={() => slideTo(++currentSlide.current)}>
            <FontAwesomeIcon icon={faCircleRight}/>
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
      {(displaySideOnRight || props.textSide === 'right' || !props.textSide) && slidesText}
    </div>
  )
}

export default CarouselWrapper