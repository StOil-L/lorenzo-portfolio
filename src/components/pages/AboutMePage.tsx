import {interests} from "../../assets/summary/Interests.ts";
import Interest from "../summary/Interest.tsx";
import GenericPage from "./GenericPage.tsx";

function AboutMePage() {

  return (
    <GenericPage header={{
      imgsrc: "",
      children: "",
    }} route="aboutme">
      <>
        <div id="explanation">
          <p>Né en 2002, mes premières inspirations vers l'informatique se sont manifestées en entendant mon père parler
            de son travail en tant que responsable sécurité informatique. Plus jeunes, mes parents jouaient à des jeux vidéo
            pendant leur temps libre; cette tendance a persisté dans la famille pour mon frère et moi dès le plus jeune âge !
            C'est cette ambiance à la maison et cette vie de famille qui a donné naissance à ce qui deviendra mon ambition à
            être développeur. En premier lieu, c'était pour être développeur de jeux-vidéo, comme beaucoup de jeunes joueurs
            avaient innocemment envisagé à l'époque. Cependant, en grandissant, j'ai compris que l'industrie était bien plus
            compétitive que ce que je pensais étant enfant. Néanmoins, par ma proximité avec le monde digital via le jeu
            vidéo, je me voyais mal abandonner l'informatique. En me spécialisant en informatique dès la terminale, j'ai
            pris goût au développement et ai souhaité poursuivre cette appétence en rejoignant le Cursus Master Ingénierie
            pour la Licence et le Master Informatique à la Faculté des Sciences de Montpellier. Cette formation renforce le
            parcours sur lequel elle s'appuie avec des compétences de management et de communication, en plus de stages
            intégrés à la formation. Dès mon second semestre pendant ce parcours, l'épidémie de COVID-19 a frappé notre
            monde. C'est là que le monde
            a vu la faiblesse de plusieurs de nos systèmes informatiques à l'international, quel que soit le milieu
            concerné. Dans ces temps difficiles, j'ai compris une chose :</p>
          <p><b>Nous sommes dans une époque où nous ne pouvons plus nous passer de l'informatique. Les entreprises doivent
            s'adapter pour survivre sur le long terme.</b></p>
          <p>Poursuivre mes études en informatique m'a paru évident à partir de ce moment. Beaucoup sont les entreprises qui
            ont besoin non seulement d'une présence sur les réseaux sociaux, mais aussi d'un moyen plus accessible,
            confortable et rapide de répondre aux besoins de leurs clients. Le développement web m'a paru comme la réponse
            évidente à cette problématique : un moyen moderne, élégant et instantané pour une entreprise de proposer des
            services quel que soit le public visé !</p>
          <p>En accord avec cette direction, renforcée par son importance au sein de notre société, j'ai poursuivi ma
            licence informatique. Après celle-ci,
            je me suis spécialisé en génie logiciel pour mon Master en informatique, un parcours orienté spécifiquement vers
            l'ingénierie logicielle, le développement web et les attentes de l'industrie. C'est durant
            celui-ci que j'ai commencé à réellement apprécier le développement : il y a de bonnes et de mauvaises façons de
            développer, des solutions plus ou moins performantes, des besoins plus ou moins essentiels... chaque projet est
            unique et malgré les problèmes rencontrés sur l'architecture du projet, la conception ou l'implémentation de
            fonctionnalités, une partie de moi sera toujours satisfaite de pouvoir réfléchir à ces problèmes et les
            résoudre. </p>
          <p>Chaque projet, chaque formation, chaque mission est un nouveau défi à relever et chacun m'apprend quelque chose
            de nouveau sur l'industrie, mes compétences et ma personnalité. Bien que je favorise certaines technologies par
            pour des questions d'habitude ou d'expérience, je reste ouvert sur l'apprentissage de nouvelles technologies
            selon les besoin de la mission ou simplement par curiosité personnelle. </p>
          <h3><b>Authentique, persévérant et rigoureux, je me positionne aujourd'hui en développeur web prêt à résoudre
            des problèmes réels, cohérents avec le métier et de porter une importante attention à la qualité de la
            solution.</b></h3>
        </div>
        {interests.length > 0 && (
          <>
            <h1>Centres d'intérêt</h1>
            {interests.map((interest, i) => {
              return (
                <div key={i}>
                  {i == 0 && <div className='summary-transition' />}
                  <Interest id={interest.id} name={interest.name} paragraphs={interest.paragraphs}
                            slides={interest.slides} isAlt={i % 2 == 0} />
                  {i < interests.length-1 && <div className={`summary-transition${i % 2 == 0 ? ' alt' : ''}`} />}
                </div>
              )
            })}
          </>
        )}
      </>
    </GenericPage>
  )
}

export default AboutMePage