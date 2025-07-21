import '../../stylesheets/PortfolioHeader.css';

type PortfolioHeaderProps = {
  children: string
  imgsrc: string
};

function PortfolioHeader(props : PortfolioHeaderProps) {
  return (
    <header>
      <h1>{props.children.toUpperCase()}</h1>
      <img src={props.imgsrc} alt={`Section ${props.children}`} />
    </header>
  )
}

export default PortfolioHeader