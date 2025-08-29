import type {InterestProps} from "../../components/summary/Interest.tsx";
import {music} from "../carousel/Music.ts";
import {theatre} from "../carousel/Theatre.ts";
import {videogames} from "../carousel/Videogames.ts";

export const interests: InterestProps[] = [
  {
    id: "music",
    name: "Musique",
    // paragraphs: [
    //   "J'ai grandi dans une famille très sensible à l'art, notamment à la musique. C'est une chose d'écouter de la musique, comme nous avons tous fait très jeunes dans la famille, mais les garçons de la famille ont également été à la Maîtrise de Nîmes, une association de musique axée principalement sur le chant. Mes parents et mon frère ont également été musiciens, respectivement joueurs de piano et de batterie et guitare. Bien que je n'ai jamais pris goût à jouer d'un instrument, j'ai néanmoins appris à assimiler le rythme d'une chanson très facilement en écoutant la musique de mes parents.",
    //   "Depuis janvier 2024, je tiens une liste d'artistes à écouter à l'avenir ou déjà écoutés. Dans cette liste, je renseigne pour chaque artiste : les années d'activité, le genre musical et quelques pistes que j'ai bien aimées. Organiser la liste me permet de mieux identifier mes goûts musicaux. C'est en restant curieux et ouvert d'esprit que je remplis ma liste de recommendations. Ces dernières me sont données par une variété de personnes : d'inconnus rencontrés dans un bar à ma famille proche, les différences d'âge et d'expérience de vie entre ces différentes personnes assurent une grande variété de recommendations musicales.",
    //   "Aujourd'hui je pense sincèrement que je ne pourrais pas me passer de la musique et de son influence sur mon humeur, mes habitudes et mon travail. Je ne fais plus rien sans musique et je ne changerais ça pour rien au monde.",
    //   "Cela ne m'empêche cependant pas d'avoir quelques préférences en terme de genres musicaux ou artistes. En voici quelques-uns tirés de la liste d'artistes musicaux mentionnée précédemment : ",
    // ],
    slides: music,
  },
  {
    id: "videogames",
    name: "Jeux vidéo",
    // paragraphs: [
    //   "Comme expliqué plus tôt, j'ai longtemps été un grand joueur de jeux vidéo dans ma vie. Bien que ces jeux apportent principalement du divertissement, ils m'ont également permis de m'inspirer afin de former des idées et principes qui définissent la personne que je suis aujourd'hui.",
    //   "J'ai longtemps grandi avec l'ordinateur du salon, configuré par mon père pour avoir une session dédiée au jeu. Mon frère et moi jouions notamment à des vieux jeux de simulation ou même aux jeux intégrés à Windows XP. Cela a rapidement évolué avec l'introduction des consoles Nintendo dans notre foyer. Nous avions commencé avec des consoles portables telles que la Game Boy Color, puis la DS et ses variantes. Nous avons ensuite fait de la place pour une console de salon, notamment la Wii, puis la Switch.",
    //   "Aujourd'hui, j'ai plutôt tendance à jouer à des jeux solo. Ce n'est pas que je déteste jouer à des jeux multijoueurs en ligne, mais plutôt qu'il est plus facile pour moi de m'adapter aux défis proposés par le jeu si moi seul définit l'issue de celui-ci. Ainsi, je ne ralentis pas les autres et je monte en compétence à un rythme qui m'est confortable.",
    //   "Je considère chaque obstacle comme un défi à relever, quelle que soit la difficulté; je vise toujours à compléter chaque jeu à 100% le plus possible. C'est un principe qui guide ma vie : ma volonté de me prouver, puis d'accompagner ceux qui veulent faire de même.",
    //   "Parmi les jeux auquel j'ai joué dans ma vie, certains ont eu un impact puissant sur ma vie. En voici certains :",
    // ],
    slides: videogames,
  },
  {
    id: "theatre",
    name: "Théâtre",
    // paragraphs: [
    //   "Bien que je n'aie pas été musicien comme le reste de ma famille, j'ai quand même une certaine sensibilité à l'art qui s'est manifestée par le théâtre. Ce qui avait commencé comme une suggestion d'activité extrascolaire dès la 4ème par ma mère, à faire chaque semaine pendant 2 heures, a eu un impact significatif sur ma vie et ma manière de m'exprimer.",
    //   "Au fur et à mesure des années et du travail réalisé en amateur de 2013 à 2019, j'ai réellement pris goût à l'art du théâtre. Beaucoup comparent le théâtre au cinéma (à raison, l'un précédant l'autre dans l'histoire) mais il existe des différences clés qui me font réellement apprécier le théâtre. Les productions géantes, remplies de scènes pré-enregistrées et d'effets spéciaux complexes du cinéma, s'opposent aux productions simples, millimétrées, délivrées en une seule fois du théâtre. Là où le cinéma nous montre où regarder, le théâtre va jouer sur la perception libre du spectateur afin d'ajouter de la profondeur au scénario. C'est cette liberté et cette simplicité qui m'ont séduites au théâtre.",
    //   "Au delà même de l'art lui-même, le théâtre m'a permis de plus librement m'exprimer dans une période où j'en avais réellement besoin, ce qui a augmenté ma confiance en moi. Le simple fait de jongler entre les registres de langage, les émotions et les humeurs est une force dans n'importe quel contexte où la communication règne en maître. Le théâtre m'a aidé à renforcer cet atout.",
    //   "Malgré mon parcours scientifique au lycée, j'avais quand même trouvé pertinent de passer l'épreuve de théâtre en candidat libre. Avec mon expérience du théâtre amateur et mon amour pour les comédies, il m'avait semblé logique de vouloir passer l'épreuve - non pas pour épauler mon baccalauréat d'une note supplémentaire, mais uniquement par appréciation des enseignements théâtriques auquel je n'avais pas accès depuis ma spécialisation en sciences de l'ingénieur et en informatique.",
    //   "Pendant mes études supérieures, j'ai un peu perdu le lien avec le théâtre. La licence étant une période difficile de ma vie et le master étant comblé de projets à rendre, je n'ai pas eu l'occasion de m'y consacrer. Plus récemment, je suis allé voir une pièce de théâtre pour l'anniversaire de mes 23 ans et c'est là que je me suis rendu compte que j'avais oublié à quel point j'aimais le théâtre. A l'avenir, je souhaite y consacrer plus de temps, notamment pour aller voir des comédies.",
    //   "Certaines pièces m'ont particulièrement marqué. Les voici :",
    // ],
    slides: theatre,
  }
];