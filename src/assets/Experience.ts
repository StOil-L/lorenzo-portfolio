import type {ExperienceSummaryProps} from "../components/summary/ExperienceSummary.tsx";
import type {TaskProps} from "../components/summary/Task.tsx";
import type {TechnologyProps} from "../components/summary/Technology.tsx";
import {backend, database, devops, frontend, language, os} from "./project/Technologies.ts";

// TODO: ajouter imgsrc pour chaque expérience
export const experience: ExperienceSummaryProps[] = [
  {
    title: "Assistant de recherche bibliographique",
    imgsrc: "",
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
    title: "Développeur logiciel",
    imgsrc: "",
    company: "LIRMM",
    city: "Montpellier",
    mission: "Développement du plugin Rocq pour le prouveur automatique Goéland",
    tasks: [
      {
        task: "Compréhension de la méthode des tableaux sémantiques via littérature scientifique et prouveur Zenon",
      },
      {
        task: "Première implémentation du plugin Rocq",
        subtasks: [
          {
            task: "Règles couvertes : règles de fermeture, règles analytiques, gamma-règles",
          },
        ] as TaskProps[]
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
    title: "Ingénieur logiciel",
    imgsrc: "",
    company: "CGI",
    city: "Castelnau-le-Lez",
    mission: "Intervention auprès d'un client du domaine bancaire selon les méthodes Agiles (Kanban, Scrum)",
    tasks: [
      {
        task: "Réduction de la dette technique sur une application de batch processing selon les exigences qualité " +
          "client",
        subtasks: [
          {
            task: "8 jobs de batch processing obsolètes décommissionnés selon la spécification projet",
          },
          {
            task: "97.5% de retours bloquants remontés par SonarQube Server corrigés",
          },
          {
            task: "Environnement : Java 8, Spring Batch, Spring Boot, SonarQube Server, Hibernate, PostreSQL, " +
              "Control-M, Git, Jenkins, Nexus, ALIEN 4 Cloud",
          },
        ] as TaskProps[],
      },
      {
        task: "Migration d'une application de gestion des relations client",
        subtasks: [
          {
            task: "3 webservices migrés avec une implémentation asynchrone plus performante",
          },
          {
            task: "Refonte graphique, logique et technique d'une page web du front-end",
          },
          {
            task: "Compilation / déploiement d'une nouvelle image",
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