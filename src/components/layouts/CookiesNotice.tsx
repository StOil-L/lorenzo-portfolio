import {useContext} from "react";
import {setCookie} from "../../util/cookies.ts";
import {AuthorizedCookies, type ContextState} from "../../util/contexts.ts";

function CookiesNotice() {

  const acceptCookies = useContext<ContextState<number>>(AuthorizedCookies);

  return acceptCookies.state == 0 && (
    <section id="cookies-notice">
      <p>Ce site utilise des cookies dans le but de faire fonctionner correctement l'affichage de
        celui-ci (thème, page actuelle, etc.)</p>
      <div className="buttons">
        <button onClick={() => {
          setCookie('cookiesaccept', 'true')
          acceptCookies.action!(1);
        }}>Accepter les cookies
        </button>
        <button onClick={() => {
          setCookie('cookiesaccept', 'false')
          acceptCookies.action!(-1);
        }}>Refuser les cookies
        </button>
      </div>
    </section>
  )
}

export default CookiesNotice