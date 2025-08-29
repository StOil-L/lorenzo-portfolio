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
          {/*<p>Né en 2002, mes premières inspirations vers l'informatique se sont manifestées en entendant mon père parler*/}
          {/*  de son travail en tant que responsable sécurité informatique. Plus jeunes, mes parents jouaient à des jeux vidéo*/}
          {/*  pendant leur temps libre; cette tendance a persisté dans la famille pour mon frère et moi dès le plus jeune âge !*/}
          {/*  C'est cette ambiance à la maison et cette vie de famille qui a donné naissance à ce qui deviendra mon ambition à*/}
          {/*  être développeur. En premier lieu, c'était pour être développeur de jeux-vidéo, comme beaucoup de jeunes joueurs*/}
          {/*  avaient innocemment envisagé à l'époque. Cependant, en grandissant, j'ai compris que l'industrie était bien plus*/}
          {/*  compétitive que ce que je pensais étant enfant. Néanmoins, par ma proximité avec le monde digital via le jeu*/}
          {/*  vidéo, je me voyais mal abandonner l'informatique. En me spécialisant en informatique dès la terminale, j'ai*/}
          {/*  pris goût au développement et ai souhaité poursuivre cette appétence en rejoignant le Cursus Master Ingénierie*/}
          {/*  pour la Licence et le Master Informatique à la Faculté des Sciences de Montpellier. Cette formation renforce le*/}
          {/*  parcours sur lequel elle s'appuie avec des compétences de management et de communication, en plus de stages*/}
          {/*  intégrés à la formation. Dès mon second semestre pendant ce parcours, l'épidémie de COVID-19 a frappé notre*/}
          {/*  monde. C'est là que le monde*/}
          {/*  a vu la faiblesse de plusieurs de nos systèmes informatiques à l'international, quel que soit le milieu*/}
          {/*  concerné. Dans ces temps difficiles, j'ai compris une chose :</p>*/}
          {/*<p><b>Nous sommes dans une époque où nous ne pouvons plus nous passer de l'informatique. Les entreprises doivent*/}
          {/*  s'adapter pour survivre sur le long terme.</b></p>*/}
          {/*<p>Poursuivre mes études en informatique m'a paru évident à partir de ce moment. Beaucoup sont les entreprises qui*/}
          {/*  ont besoin non seulement d'une présence sur les réseaux sociaux, mais aussi d'un moyen plus accessible,*/}
          {/*  confortable et rapide de répondre aux besoins de leurs clients. Le développement web m'a paru comme la réponse*/}
          {/*  évidente à cette problématique : un moyen moderne, élégant et instantané pour une entreprise de proposer des*/}
          {/*  services quel que soit le public visé !</p>*/}
          {/*<p>En accord avec cette direction, renforcée par son importance au sein de notre société, j'ai poursuivi ma*/}
          {/*  licence informatique. Après celle-ci,*/}
          {/*  je me suis spécialisé en génie logiciel pour mon Master en informatique, un parcours orienté spécifiquement vers*/}
          {/*  l'ingénierie logicielle, le développement web et les attentes de l'industrie. C'est durant*/}
          {/*  celui-ci que j'ai commencé à réellement apprécier le développement : il y a de bonnes et de mauvaises façons de*/}
          {/*  développer, des solutions plus ou moins performantes, des besoins plus ou moins essentiels... chaque projet est*/}
          {/*  unique et malgré les problèmes rencontrés sur l'architecture du projet, la conception ou l'implémentation de*/}
          {/*  fonctionnalités, une partie de moi sera toujours satisfaite de pouvoir réfléchir à ces problèmes et les*/}
          {/*  résoudre. </p>*/}
          {/*<p>Chaque projet, chaque formation, chaque mission est un nouveau défi à relever et chacun m'apprend quelque chose*/}
          {/*  de nouveau sur l'industrie, mes compétences et ma personnalité. Bien que je favorise certaines technologies par*/}
          {/*  pour des questions d'habitude ou d'expérience, je reste ouvert sur l'apprentissage de nouvelles technologies*/}
          {/*  selon les besoin de la mission ou simplement par curiosité personnelle. </p>*/}
          {/*<h3><b>Authentique, persévérant et rigoureux, je me positionne aujourd'hui en développeur web prêt à résoudre*/}
          {/*  des problèmes réels, cohérents avec le métier et de porter une importante attention à la qualité de la*/}
          {/*  solution.</b></h3>*/}
          <h1>Pourquoi le développement web ?</h1>
          <p>J'ai grandi dans une famille qui avait une grande proximité avec l'informatique. Mon père était responsable sécurité informatique pendant mon enfance et mon frère et moi nous avions grandi autour de l'ordinateur et des consoles de jeux. Cette proximité au digital m'a amené à me spécialiser en informatique le plus tôt possible. Dès la terminale, j'ai suivi l'option Informatique et Sciences du Numérique et j'ai commencé à explorer le monde de la programmation avec Python et HTML. Cette entrée en matière m'a motivé à intégrer le Cursus Master en Ingénierie en Informatique à la Faculté des Sciences de Montpellier en septembre 2019.</p>
          <p>Dès le début de mon cursus, j'ai souhaité m'orienter vers le master AIGLE, dédié au développement web et aux bonnes pratiques de programmation. C'est pendant la pandémie de COVID-19 que mon choix s'est confirmé : beaucoup d'entreprises ne pouvant pas assurer leur activité pendant le confinement ont été contraintes d'arrêter celle-ci, définitivement pour certaines. Celles qui ont pu continuer leur activité avaient développé des applications web.</p>
          <p><b>Plus que jamais, la transition digitale des entreprises est devenue un impératif; cette mission est devenue ma mission.</b></p>
          <p>Mon cursus m'a donné l'opportunité de travailler sur plusieurs projets en développement web, en accompagnant et dirigeant une dizaine de compères talentueux. Nous avons adapté chaque projet selon les cahiers des charges proposés pendant nos unités d'enseignement, ainsi que nos appétences. Cette diversité de besoins garantit une approche d'ingénierie différente à chaque projet.</p>
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