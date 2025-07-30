import '../../stylesheets/HomePage.css'
import CarouselWrapper from "../carousel/CarouselWrapper.tsx";
import {homePageNavigation} from "../../assets/carousel/HomePageNavigation.ts";
import GenericPage from "./GenericPage.tsx";

function HomePage() {

  return (
    <GenericPage header={{
      imgsrc: "lorenzo-portfolio/photos/homepage.jpg",
      children: "Lorenzo PUCCIO",
    }} route="">
      <div id="explanation">
        <h3>Bienvenue sur mon portfolio !</h3>
        <p>Je m'appelle Lorenzo PUCCIO, j'ai 23 ans et je suis développeur web diplômé d'un Master Génie Logiciel à la Faculté des Sciences de Montpellier. Bien que je sois opérationnel en développement front-end avec TypeScript et React, j'ai une appétence particulière pour le développement back-end, notamment avec Java et Spring Boot. Je me considère comme quelqu'un d'authentique, qui sait faire preuve de persévérance et de rigueur malgré une certaine introversion.</p>
        <p>Ayant actuellement 8 mois d'expérience en développement logiciel, je suis aujourd'hui à la recherche de deux opportunités dans les villes de Montpellier, Paris, Lyon, Toulouse et Nantes, classées ici par ordre d'importance :</p>
        <ol>
          <li>Une opportunité en CDI / CDD en développement back-end, de préférence avec Java et Spring Boot ou en développement front-end, de préférence avec TypeScript et React</li>
          <li>Une opportunité en alternance de 14 mois pour septembre 2025 en développement web et / ou mobile</li>
        </ol>
        <p>Au plaisir d'échanger avec vous sur de telles opportunités !</p>
        <p><b>Explorez les différentes catégories de mon portfolio en utilisant la barre de navigation au sommet de la page ou en utilisant les liens présents dans le carousel d'images ci-dessous :</b></p>
        <center>
          <div id="homepage-carousel">
            <CarouselWrapper slides={homePageNavigation} />
          </div>
        </center>
        <br />
      </div>
    </GenericPage>
  )
}

export default HomePage
