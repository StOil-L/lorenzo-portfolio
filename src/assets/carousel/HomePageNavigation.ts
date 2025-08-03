import type {CarouselSlideProps} from "../../components/carousel/CarouselSlide.tsx";
import {projects} from "../summary/Projects.ts";

export const homePageNavigation: CarouselSlideProps[] = [
  {
    imgurl: "photos/Photo_CV_Juillet2025.jpg",
    imgalt: "Photo de CV Lorenzo PUCCIO",
    title: "A propos de moi",
    description: "Je vous parle de moi plus en détail, dont mes intérêts et l'origine de ma motivation derrière mes choix de carrière.",
    link: "/lorenzo-portfolio/aboutme",
  },
  {
    imgurl: "https://allvectorlogo.com/img/2021/12/github-logo-vector.png",
    imgalt: "Logo et titre GitHub",
    title: "Projets",
    description: `Découvrez les ${projects.length} différents projets réalisés sur plusieurs années, seul ou en équipe !`,
    link: "/lorenzo-portfolio/projects",
  },
  {
    imgurl: "https://sciences.edu.umontpellier.fr/files/2022/06/Faculte-des-Sciences-2022-RVB-scaled.jpg",
    imgalt: "Logo de la Faculté des Sciences de Montpellier",
    title: "Formation",
    description: "J'y renseigne les différentes formations que j'ai suivies et les diplômes que j'ai obtenus pendant ma vie.",
    link: "/lorenzo-portfolio/education",
  },
  {
    imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/CGI_logo.svg/2560px-CGI_logo.svg.png",
    imgalt: "Logo de CGI",
    title: "Expérience professionnelle",
    description: "Suivez le descriptif de mes différentes missions professionnelles, ainsi que les technologies utilisées correspondantes.",
    link: "/lorenzo-portfolio/experience",
  },
  {
    imgurl: "https://meilleure-innovation.com/wp-content/uploads/2022/04/linkedin--logo-image-une.png",
    imgalt: "Logo et titre LinkedIn",
    title: "Contact",
    description: "Une question, une proposition ou un retour à me faire parvenir ? Contactez-moi !",
    link: "/lorenzo-portfolio/contact",
  },
]