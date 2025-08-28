import '../../stylesheets/PortfolioHeader.css';
import {useEffect, useRef} from "react";

export type PortfolioHeaderProps = {
  children: string
  imgsrc: string
  imgalt?: string
};

function PortfolioHeader(props : PortfolioHeaderProps) {

  const h1Ref = useRef<HTMLHeadingElement>(null)!
  const previousValue = useRef<number>(0);

  useEffect(() => {
    const h1Element = h1Ref.current;
    if(!h1Element) return;
    const observer = new ResizeObserver((entries) => {
      const headingElement = entries[0].target as HTMLHeadingElement;
      const headingParentWidth = (headingElement.parentElement as HTMLDivElement).offsetWidth;
      let fontSize = parseInt(window.getComputedStyle(headingElement).fontSize);
      if(headingElement.scrollWidth > headingParentWidth) {
        while(headingElement.scrollWidth > headingParentWidth && fontSize > 0) {
          headingElement.style.fontSize = fontSize + "px";
          fontSize--;
        }
      } else if(headingElement.scrollWidth > previousValue.current) {
        while (headingElement.scrollWidth > previousValue.current && fontSize <= 100 /* 6.25rem */) {
          headingElement.style.fontSize = fontSize + "px";
          fontSize++;
        }
      }
      previousValue.current = headingParentWidth;
    });
    observer.observe(h1Element);
    return () => observer.disconnect();
  }, []);

  return (
    <header>
      <div><h1 ref={h1Ref}>{props.children.toUpperCase()}</h1></div>
      <img src={props.imgsrc} alt={props.imgalt ? props.imgalt : `Section ${props.children}`} />
    </header>
  )
}

export default PortfolioHeader