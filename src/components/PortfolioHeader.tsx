type PortfolioHeaderProps = {
  children: string
};

function PortfolioHeader(props : PortfolioHeaderProps) {
  return (
    <header>
      <h1>{props.children}</h1>
    </header>
  )
}

export default PortfolioHeader