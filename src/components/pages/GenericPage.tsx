import PortfolioHeader, {type PortfolioHeaderProps} from "../layouts/PortfolioHeader.tsx";
import {type ReactNode, useContext, useEffect} from "react";
import {setPageCookie} from "../../util/cookies.ts";
import {type ContextState, CurrentPage} from "../../util/contexts.ts";

interface GenericPageProps {
  header: PortfolioHeaderProps,
  route: string,
  children: ReactNode,
}

function GenericPage(props: GenericPageProps) {

  const currentPageValue = useContext<ContextState<string>>(CurrentPage);

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    setPageCookie(props.route);
    currentPageValue.action!(props.route);
  }, []);

  return (
    <>
      <PortfolioHeader imgsrc={props.header.imgsrc === ""? `photos/${props.route}.jpg` : props.header.imgsrc}
                       imgalt={props.header.imgalt}>
        {props.header.children}
      </PortfolioHeader>
      <div id="page-info-transition" />
      <div id="page-info">
        {props.children}
      </div>
    </>
  )
}

export default GenericPage;