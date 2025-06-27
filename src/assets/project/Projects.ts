import type {ProjectSummaryProps} from "../../components/summary/ProjectSummary.tsx";
import collaborators from "./Collaborators.ts";
import type {CollaboratorProps} from "../../components/summary/Collaborator.tsx";
import type {TechnologyProps} from "../../components/summary/Technology.tsx";
import {backend, database, devops, frontend, ide, language, os} from "./Technologies.ts";

export const projects: ProjectSummaryProps[] = [
  {
    title: 'Meerketball',
    description: 'Meerketball permet à des gestionnaires d\'enregistrer des équipes dans des tournois, dont les ' +
      'membres peuvent regarder le déroulement en temps réel. La liste complète des fonctionnalités est disponible ' +
      'sur la page du projet.',
    collaborators: [
      collaborators.get("Cédric Berthet"),
      collaborators.get("Robin L'Huillier"),
      collaborators.get("Charlotte Parienti Fabre"),
      collaborators.get("Nicolas Ruiz"),
    ] as CollaboratorProps[],
    technologies: [
      language.get("PHP"),
      language.get("HTML"),
      language.get("CSS"),
      language.get("JavaScript"),
      database.get("MySQL"),
    ] as TechnologyProps[],
    link: 'https://github.com/StOil-L/meerketball-website',
  },
  {
    title: 'Module arithmétique pour Goéland',
    description: 'Goéland est un prouveur automatique en logique du premier ordre développé en Go par Julie Cailler. ' +
      'La contribution de l\'équipe au prouveur permet de résoudre des preuves arithmétiques en implémentant les ' +
      'algorithmes du simplexe et du Branch & Cut afin d\'optimiser la recherche de solutions.',
    collaborators: [
      collaborators.get("Cédric Berthet"),
      collaborators.get("Enzo Goulesque"),
      collaborators.get("Margaux Renoir"),
      collaborators.get("Tom Simula"),
    ] as CollaboratorProps[],
    technologies: [
      language.get("Go"),
      os.get("Linux"),
    ] as TechnologyProps[],
    link: 'https://github.com/StOil-L/Goeland-arithmetic-module',
  },
  {
    title: 'API REST pour réservation de chambre d\'hôtel',
    description: 'Cette API REST permet la réservation d\'une chambre d\'hôtel sur une plage de dates précise selon ' +
      'leur localisation et leur prix. Une réduction s\'applique selon l\'agence utilisée pour effectuer la réservation.',
    collaborators: [
      collaborators.get("Arthur Sapin"),
    ] as CollaboratorProps[],
    technologies: [
      language.get("Java"),
      backend.get("Spring Boot"),
    ] as TechnologyProps[],
    link: 'https://github.com/StOil-L/booking-restful-api'
  },
  {
    title: 'Interima',
    description: 'Interima est une application de mise en relation de recruteurs et de candidats à des offres de ' +
      'travail en intérim. Un candidat peut chercher, sauvegarder et candidater à une offre d\'emploi, tandis qu\'un ' +
      'recruteur ou une agence d\'intérim peuvent gérer les candidatures sur une offre ainsi que consulter la liste ' +
      'des offres publiées. La liste complète des fonctionnalités est disponible sur la page du projet.',
    collaborators: [
      collaborators.get("Océane Ongaro"),
      collaborators.get("Arthur Sapin"),
    ] as CollaboratorProps[],
    technologies: [
      language.get("Java"),
      ide.get("Android Studio"),
      database.get("MySQL"),
      devops.get("Docker"),
    ] as TechnologyProps[],
    link: 'https://github.com/StOil-L/Interima',
  },
  {
    title: 'API REST orientée domotique pour ESP32',
    description: 'Cette API REST permet de contrôler l\'allumage d\'une DEL tricolore d\'un microcontrôleur ' +
      'manuellement (via une action de l\'API) ou automatiquement via un capteur de luminosité ou de chaleur. ' +
      'L\'état de la DEL et des capteurs est accessible via un terminal d\'affichage sur le microcontrôleur ainsi que' +
      ' des requêtes GET sur les endpoints de l\'API, mais la connexion à l\'API via un mot de passe est nécessaire ' +
      'afin de modifier son état via des requêtes POST.',
    collaborators: [
      collaborators.get("Arthur Sapin"),
    ] as CollaboratorProps[],
    technologies: [
      ide.get("Arduino IDE"),
    ] as TechnologyProps[],
  },
  {
    title: 'Portfolio',
    description: 'Le site web sur lequel vous êtes en train de lire ce texte est mon portfolio. Il sert de point ' +
      'd\'entrée aux recruteurs afin d\'en savoir plus sur moi, mes projets et mon expérience professionnelle.',
    technologies: [
      language.get("TypeScript"),
      frontend.get("React"),
      frontend.get("Vite"),
      devops.get("ESLint"),
    ] as TechnologyProps[],
    link: 'https://github.com/StOil-L/lorenzo-portfolio'
  }
]