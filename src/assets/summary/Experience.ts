import type {ExperienceSummaryProps} from "../../components/summary/ExperienceSummary.tsx";
import type {TaskProps} from "../../components/summary/Task.tsx";
import type {TechnologyProps} from "../../components/summary/Technology.tsx";
import {backend, database, devops, frontend, language, os} from "./Technologies.ts";

export const experience: ExperienceSummaryProps[] = [
  {
    title: "Assistant de recherche bibliographique",
    imgsrc: "https://www.umontpellier.fr/wp-content/uploads/2014/07/LogoLIRMMlong.jpg",
    company: "LIRMM",
    city: "Montpellier",
    mission: "Etat de l'art : Débattre et argumenter pour écrire des preuves mathématiques",
    tasks: [
      {
        task: "Compréhension de littérature scientifique anglaise et française",
      },
      {
        task: "Rédaction de l'état de l'art en LaTeX"
      }
    ] as TaskProps[],
    technologies: [
      language.get("LaTeX"),
    ] as TechnologyProps[],
    startDate: new Date(2021, 5, 1),
    endDate: new Date(2021, 6, 1),
  },
  {
    title: "Développeur logiciel - Go",
    imgsrc: "https://www.umontpellier.fr/wp-content/uploads/2014/07/LogoLIRMMlong.jpg",
    company: "LIRMM",
    city: "Montpellier",
    mission: "mplémentation d’un plugin d’interprétation vers le prouveur manuel Rocq pour le prouveur automatique " +
      "Goéland",
    tasks: [
      {
        task: "Interprétation de 80% des règles de la méthode des tableaux sémantiques : règles de fermeture, règles " +
          "analytiques, gamma-règles",
      },
    ] as TaskProps[],
    technologies: [
      language.get("Go"),
      language.get("Rocq"),
      devops.get("Git"),
      os.get("Linux"),
    ] as TechnologyProps[],
    startDate: new Date(2022, 6, 1),
    endDate: new Date(2022, 8, 1),
    link: "https://github.com/StOil-L/Goeland-Coq-plugin",
  },
  {
    title: "Ingénieur logiciel - Java Spring / JavaScript React",
    imgsrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/CGI_logo.svg/2560px-CGI_logo.svg.png",
    company: "CGI",
    city: "Castelnau-le-Lez",
    mission: "Préparation de la migration cloud d’un portefeuille applicatif bancaire afin de réduire les coûts de " +
      "maintenance d’infrastructure client (Agile : Scrum, Kanban) :",
    tasks: [
      {
        task: "Réduction de la dette technique d’une application de microservices de batch processing",
        subtasks: [
          {
            task: "décommissionnement de 8 jobs obsolètes",
          },
          {
            task: "résolution de 97,5 % des retours SonarQube selon la conformité qualité client",
          },
          {
            task: "Environnement : Java 8, Spring Batch, Spring Boot, SonarQube Server, Hibernate, PostreSQL, " +
              "Control-M, Git, Jenkins, Nexus, ALIEN 4 Cloud",
          },
        ] as TaskProps[],
      },
      {
        task: "Modernisation d’une application de gestion de la relation client",
        subtasks: [
          {
            task: "Migration de 3 webservices REST / SOAP et optimisation des performances par programmation concurrente",
          },
          {
            task: "Refonte du front-end (AngularJS à React) avec intégration du design system client",
          },
          {
            task: "Environnement : Java 17, Spring Boot, API REST, webservices SOAP, JavaScript, React, Redux, " +
              "Node.js, ESLint, Git, Jenkins, Nexus",
          },
        ] as TaskProps[],
      }
    ] as TaskProps[],
    technologies: [
      language.get("Java"),
      language.get("JavaScript"),
      database.get("PostgreSQL"),
      backend.get("Spring Batch"),
      backend.get("Spring Boot"),
      backend.get("Hibernate"),
      backend.get("Node.js"),
      frontend.get("React"),
      frontend.get("Redux"),
      devops.get("SonarQube Server"),
      devops.get("Control-M"),
      devops.get("Git"),
      devops.get("Jenkins"),
      devops.get("ALIEN 4 Cloud"),
      devops.get("ESLint"),
    ] as TechnologyProps[],
    startDate: new Date(2024, 0, 22),
    endDate: new Date(2024, 6, 26),
  }
]