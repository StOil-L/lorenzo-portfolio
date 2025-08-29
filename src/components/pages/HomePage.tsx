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
        {/*<p>Je m'appelle Lorenzo PUCCIO, j'ai 23 ans et je suis développeur web diplômé d'un Master Génie Logiciel à la Faculté des Sciences de Montpellier. Bien que je sois opérationnel en développement front-end avec TypeScript et React, j'ai une appétence particulière pour le développement back-end, notamment avec Java et Spring Boot. Je me considère comme quelqu'un d'authentique, qui sait faire preuve de persévérance et de rigueur malgré une certaine introversion.</p>*/}
        {/*<p>Ayant actuellement 8 mois d'expérience en développement logiciel, je suis aujourd'hui à la recherche de deux opportunités dans les villes de Montpellier, Paris, Lyon, Toulouse et Nantes, classées ici par ordre d'importance :</p>*/}
        {/*<ol>*/}
        {/*  <li>Une opportunité en CDI / CDD en développement back-end, de préférence avec Java et Spring Boot ou en développement front-end, de préférence avec TypeScript et React</li>*/}
        {/*  <li>Une opportunité en alternance de 14 mois pour septembre 2025 en développement web et / ou mobile</li>*/}
        {/*</ol>*/}
        <p>Je m'appelle Lorenzo PUCCIO, j'ai 23 ans et je suis développeur web fullstack. Armé de 6 projets de développement, dont 5 orientés web et APIs, je suis titulaire d'un Master en Génie Logiciel depuis fin 2024. Armé de 8 mois d'expérience en ingénierie logicielle web, j'ai connaissance de diverses technologies et de méthodes de travail permettant une haute productivité et flexibilité, telles que les méthodes Agiles ou la méthodologie LEAN.</p>
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
