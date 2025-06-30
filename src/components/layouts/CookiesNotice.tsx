import {useReducer} from "react";
import {getCookie, setCookie} from "../../util/cookies.ts";
import type {Rerenderer} from "./MainLayout.tsx";

function reducer(state: boolean, action: string) {
  if(action === 'accept') {
    setCookie('cookiesaccept', 'true')
  } else if(action === 'refuse') {
    setCookie('cookiesaccept', 'false')
  } else throw Error("Unknown action")
  state = true;
  return state;
}

function CookiesNotice(props: Rerenderer) {

  const [confirmNotice, cookiesDispatch] = useReducer(reducer, getCookie("cookiesaccept") !== undefined);

  return !confirmNotice && (
    <section id="cookies-notice">
      <p>Ce site utilise des cookies dans le but de faire fonctionner correctement l'affichage de
        celui-ci (thème, page actuelle, etc.)</p>
      <div className="buttons">
        <button onClick={() => {
          cookiesDispatch("accept");
          props.callback(1)
        }}>Accepter les cookies</button>
        <button onClick={() => {
          cookiesDispatch("refuse")
          props.callback(-1)
        }}>Refuser les cookies</button>
      </div>
    </section>
  )
}

export default CookiesNotice