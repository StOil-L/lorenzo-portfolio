import PortfolioHeader from "../layouts/PortfolioHeader.tsx";
import {useEffect} from "react";

function ContactPage() {

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  return (
    <PortfolioHeader imgsrc="photos/contact.jpg">Contact</PortfolioHeader>
  )
}

export default ContactPage