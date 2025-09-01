import '../../stylesheets/HomePage.css'
import CarouselWrapper from "../carousel/CarouselWrapper.tsx";
import {homePageNavigation} from "../../assets/carousel/HomePageNavigation.ts";
import GenericPage from "./GenericPage.tsx";

function HomePage() {

  return (
    <GenericPage header={{
      imgsrc: "photos/homepage.webp",
      children: "Lorenzo PUCCIO",
    }} route="">
      <div id="explanation">
        <center><h1>Bienvenue sur mon portfolio !</h1></center>
        <p>Je m'appelle Lorenzo PUCCIO, j'ai 23 ans et je suis développeur web fullstack. Contributeur à 6 projets de développement, dont 5 orientés web et API, je suis titulaire d'un Master en Génie Logiciel depuis fin 2024. Armé de 8 mois d'expérience en ingénierie logicielle et web, je maîtrise diverses technologies et méthodes de travail permettant une haute productivité et flexibilité, telles que les méthodes Agiles ou la méthodologie LEAN.</p>
        <p>Je suis en recherche active d'une première opportunité en développement web fullstack située préférablement aux alentours de grandes métropoles françaises. Ma capacité à défier le besoin et à apprendre rapidement me permet de m'adapter à une grande variété de missions. Authentique et persévérant, je suis une force de motivation en constante veille technologique qui ne cherche qu'à s'améliorer.</p>
        <center><h2>Au plaisir d'échanger avec vous au sujet d'une telle opportunité !</h2></center>
        <br/>
        <h3><b>Explorez les différentes catégories de mon portfolio en utilisant la barre de navigation au sommet de la page ou en utilisant les liens présents dans le carousel d'images ci-dessous :</b></h3>
        <center>
          <div id="homepage-carousel">
            <CarouselWrapper slides={homePageNavigation} autoScroll={true} />
          </div>
        </center>
      </div>
    </GenericPage>
  )
}

export default HomePage
