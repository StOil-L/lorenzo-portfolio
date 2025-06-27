import type {TechnologyProps} from "../../components/summary/Technology.tsx";
import {
  faAngular,
  faCss3Alt, faDartLang, faDocker, faFlutter,
  faGitAlt,
  faGolang,
  faHtml5,
  faJava,
  faJenkins,
  faJs,
  faLinux,
  faNodeJs, faPhp, faPython, faSymfony, faWindows
} from "@fortawesome/free-brands-svg-icons";


export const technologies: TechnologyProps[] = [
  {
    name: "Java",
    icon: faJava,
    color: 'F69007',
  },
  {
    name: "Spring Boot",
    icon: 'https://spring.io/img/projects/spring-boot.svg',
    highlight: true,
  },
  {
    name: "Spring Batch",
    icon: 'https://spring.io/img/projects/spring-batch.svg',
    highlight: true,
  },
  {
    name: "SonarQube Server",
    icon: 'technologies/sonarqube-server-logo-3.svg',
    highlight: true,
  },
  {
    name: "Hibernate",
    icon: 'technologies/hibernate-icon.svg',
    highlight: true,
  },
  {
    name: "PostreSQL",
    icon: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'
  },
  {
    name: "Git",
    icon: faGitAlt,
    color: 'F54D27',
  },
  {
    name: "Jenkins",
    icon: faJenkins,
    color: 'd33833',
  },
  {
    name: "JavaScript",
    icon: faJs,
    color: 'F7DF1E',
  },
  {
    name: "React",
    icon: 'technologies/react.svg',
    highlight: true,
  },
  {
    name: "Redux",
    icon: 'https://grafikart.fr/uploads/icons/redux.svg',
    highlight: true,
  },
  {
    name: "Node.js",
    icon: faNodeJs,
    color: '689f63',
  },
  {
    name: "ESLint",
    icon: 'https://fr.eslint.org/favicon.ico',
    highlight: true,
  },
  {
    name: "Linux",
    icon: faLinux,
    color: '000000',
  },
  {
    name: "Go",
    icon: faGolang,
    color: '2DBCAF',
  },
  {
    name: "Rocq",
    icon: 'technologies/logo-rocq-orange.svg',
    highlight: true,
  },
  {
    name: "HTML",
    icon: faHtml5,
    color: 'F16529',
  },
  {
    name: "CSS",
    icon: faCss3Alt,
    color: '2965f1',
  },
  {
    name: "PHP",
    icon: faPhp,
    color: '4F5B93',
  },
  {
    name: "Android Studio",
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Android_Studio_Icon_3.6.svg',
  },
  {
    name: "MySQL",
    icon: 'https://www.svgrepo.com/show/354099/mysql.svg',
    highlight: true,
  },
  {
    name: "Docker",
    icon: faDocker,
    color: '1D63ED',
  },
  {
    name: "Arduino IDE",
    icon: 'https://www.arduino.cc/wiki/icons/icon-72x72.png',
  },
  {
    name: "TypeScript",
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  },
  {
    name: "Vite",
    icon: 'technologies/vite.svg',
  },
  {
    name: "Symfony",
    icon: faSymfony,
    color: '000000'
  },
  {
    name: "Python",
    icon: faPython,
    color: 'FFD748'
  },
  {
    name: "TensorFlow",
    icon: 'https://avatars.githubusercontent.com/u/15658638?s=280&v=4',
    highlight: true,
  },
  {
    name: "scikit-learn",
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
  },
  {
    name: "gensim",
    icon: 'technologies/gensim-rare.png',
  },
  {
    name: "NLTK",
    icon: 'technologies/nltk.png',
    highlight: true,
  },
  {
    name: "C",
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg',
  },
  {
    name: "C++",
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
  },
  {
    name: "MongoDB",
    icon: 'technologies/mongodb-logo.svg',
    highlight: true,
  },
  {
    name: "Express.js",
    icon: 'technologies/express-js-icon.svg',
    highlight: true,
  },
  {
    name: "Angular",
    icon: faAngular,
    color: 'DD0031',
  },
  {
    name: "Dart",
    icon: faDartLang,
    color: '2CB7F6',
  },
  {
    name: "Flutter",
    icon: faFlutter,
    color: '32B9F6',
  },
  {
    name: "Qt",
    icon: 'technologies/qt.svg',
    highlight: true,
  },
  {
    name: "LaTeX",
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg',
    highlight: true,
  },
  {
    name: "Windows",
    icon: faWindows,
    color: '00BCF4',
  }
]

export const language = new Map<string, TechnologyProps>([
  ["Java", technologies[0]],
  ["JavaScript", technologies[8]],
  ["Go", technologies[14]],
  ["Rocq", technologies[15]],
  ["HTML", technologies[16]],
  ["CSS", technologies[17]],
  ["PHP", technologies[18]],
  ["TypeScript", technologies[23]],
  ["Python", technologies[26]],
  ["C", technologies[31]],
  ["C++", technologies[32]],
  ["Dart", technologies[36]],
  ["LaTeX", technologies[39]],
]);

export const database = new Map<string, TechnologyProps>([
  ["PostgreSQL", technologies[5]],
  ["MySQL", technologies[20]],
  ["MongoDB", technologies[33]],
]);

export const backend = new Map<string, TechnologyProps>([
  ["Spring Boot", technologies[1]],
  ["Spring Batch", technologies[2]],
  ["Hibernate", technologies[4]],
  ["Node.js", technologies[11]],
  ["Symfony", technologies[25]],
  ["Express.js", technologies[34]],
]);

export const frontend = new Map<string, TechnologyProps>([
  ["React", technologies[9]],
  ["Redux", technologies[10]],
  ["Vite", technologies[24]],
  ["Angular", technologies[35]],
]);

export const devops = new Map<string, TechnologyProps>([
  ["SonarQube Server", technologies[3]],
  ["Git", technologies[6]],
  ["Jenkins", technologies[7]],
  ["ESLint", technologies[12]],
  ["Docker", technologies[21]],
]);

export const ai = new Map<string, TechnologyProps>([
  ["TensorFlow", technologies[27]],
  ["scikit-learn", technologies[28]],
  ["gensim", technologies[29]],
  ["NLTK", technologies[30]],
]);

export const ide = new Map<string, TechnologyProps>([
  ["Android Studio", technologies[19]],
  ["Arduino IDE", technologies[22]],
  ["Qt", technologies[38]],
]);

export const os = new Map<string, TechnologyProps>([
  ["Linux", technologies[13]],
  ["Windows", technologies[40]],
]);

export const sdk = new Map<string, TechnologyProps>([
  ["Flutter", technologies[37]],
]);

