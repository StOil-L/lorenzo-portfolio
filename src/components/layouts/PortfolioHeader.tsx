import '../../stylesheets/PortfolioHeader.css';

type PortfolioHeaderProps = {
  children: string
  imgsrc: string
  imgalt?: string
};

function PortfolioHeader(props : PortfolioHeaderProps) {
  return (
    <header>
      <h1>{props.children.toUpperCase()}</h1>
      <img src={props.imgsrc} alt={props.imgalt ? props.imgalt : `Section ${props.children}`} />
    </header>
  )
}

export default PortfolioHeader