import {useCallback, useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-regular-svg-icons";
import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {getCookie, setCookie} from "../../util/cookies.ts";

function DarkModeToggle() {

  const [icon, setIcon] = useState<IconDefinition>(
    getCookie("theme") == 'dark' ? faMoon : faSun
  );

  const setButtonIcon = (cvalue: string) => {
    setIcon(cvalue == 'dark' ? faMoon : faSun);
  }
  
  const setTheme = useCallback(() => {
    document.documentElement.style.colorScheme = getCookie("theme") as string;
    setButtonIcon(getCookie("theme") as string);
    setGradients();
  }, [])

  // Gradients for transition manually set because there is no equivalent to light-dark in CSS for them
  const setGradients = () => {
    document.documentElement.style.setProperty("--summary-transition-gradient",
      getCookie('theme') == 'dark' ? 'linear-gradient(var(--dark-background-color), var(--light-text-color))' :
        'linear-gradient(var(--light-background-color), var(--dark-text-color))');
    document.documentElement.style.setProperty("--summary-transition-alt-gradient",
      getCookie('theme') == 'dark' ? 'linear-gradient(var(--light-text-color), var(--dark-background-color))' :
        'linear-gradient(var(--dark-text-color), var(--light-background-color))');
  }

  // we don't check for accepted cookies here due to conditional rendering in NavigationMenu component
  const switchTheme = () => {
    setCookie("theme", getCookie("theme") == 'dark' ? 'light' : 'dark');
    setTheme();
  }

  useEffect(() => {
    const setThemeToSystem = (event: MediaQueryListEvent | MediaQueryList) => {
      if(getCookie("cookiesaccept") === 'true') {
        setCookie('theme', event.matches ? 'dark' : 'light');
        setTheme();
      }
    };
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", setThemeToSystem);
    if(getCookie("cookiesaccept") === 'true') {
      if(typeof getCookie('theme') === 'undefined') setThemeToSystem(mediaQuery); else setTheme();
    }
    return () => {
      mediaQuery.removeEventListener("change", setThemeToSystem);
    };
  }, [setTheme]);

  return (
    <button onClick={switchTheme}>
      <FontAwesomeIcon icon={icon} /> {'\t'}
      Thème
    </button>
  );
}

export default DarkModeToggle;