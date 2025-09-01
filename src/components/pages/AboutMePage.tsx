import {interests} from "../../assets/summary/Interests.ts";
import GenericPage from "./GenericPage.tsx";
import Interest from "../summary/Interest.tsx";

function AboutMePage() {

  return (
    <GenericPage header={{
      imgsrc: "",
      children: "",
    }} route="aboutme">
      <>
        <div id="explanation">
          <h1>Pourquoi le développement web ?</h1>
          <p>J'ai grandi dans une famille qui avait une grande proximité avec l'informatique. Mon père était responsable sécurité informatique pendant mon enfance et mon frère et moi nous avions grandi autour de l'ordinateur et des consoles de jeux. Cette proximité au digital m'a amené à me spécialiser en informatique le plus tôt possible. Dès la terminale, j'ai suivi l'option Informatique et Sciences du Numérique et j'ai commencé à explorer le monde de la programmation avec Python et HTML. Cette entrée en matière m'a motivé à intégrer le Cursus Master en Ingénierie en Informatique à la Faculté des Sciences de Montpellier en septembre 2019.</p>
          <p>Dès le début de mon cursus, j'ai souhaité m'orienter vers le master AIGLE, dédié au développement web et aux bonnes pratiques de programmation. C'est pendant la pandémie de COVID-19 que mon choix s'est confirmé : beaucoup d'entreprises ne pouvant pas assurer leur activité pendant le confinement ont été contraintes d'arrêter celle-ci, définitivement pour certaines. Celles qui ont pu continuer leur activité avaient développé des applications web.</p>
          <p><b>Plus que jamais, la transition digitale des entreprises est devenue un impératif; cette mission est devenue ma mission.</b></p>
          <p>Mon cursus m'a donné l'opportunité de travailler sur plusieurs projets en développement web, en accompagnant et dirigeant une dizaine de compères talentueux. Nous avons adapté chaque projet selon les cahiers des charges proposés pendant nos unités d'enseignement, ainsi que nos appétences. Cette diversité de besoins garantit une approche d'ingénierie différente à chaque projet. Aujourd'hui plus que jamais, je porte une attention particulière à la qualité et à la sécurité du code qui implémente une spécification robuste et cohérente, guidée par les patrons de conception.</p>
          <h3><b>Authentique, persévérant et curieux, titulaire d'un Master en Génie Logiciel et doté de 8 mois d'expérience en ingénierie logicielle web, je suis prêt à débuter ma carrière au sein d'une entreprise qui saura accompagner ma veille technologique.</b></h3>
        </div>
        {interests.length > 0 && (
          <>
            <div id="explanation">
              <h1>Centres d'intérêt</h1>
              <p>Quelle que soit l'activité que j'entreprends, je reste curieux et ouvert à de nouveaux horizons. C'est un trait personnel que j'ai cultivé pendant mes études supérieures avec divers projets, puis entretenu avec des formations supplémentaires. Dans ma vie personnelle, ce trait se manifeste par une variété de groupes de musique que j'écoute, de jeux vidéo auxquels je joue et de pièces de théâtre que j'ai vues.</p>
            </div>
            <div id="interests-transition-in" />
            <div className="interests">
              {interests.map((interest, i) => {
                return <Interest key={i} id={interest.id} name={interest.name} slides={interest.slides} displayTitle={true}/>
              })}
            </div>
            <div id="interests-transition-out" />
          </>
        )}
      </>
    </GenericPage>
  )
}

export default AboutMePage