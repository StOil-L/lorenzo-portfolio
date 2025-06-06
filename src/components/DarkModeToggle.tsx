import {useCallback, useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-regular-svg-icons";
import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {getCookie, setCookie} from "../util/cookies.ts";

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
  }, [])

  const switchTheme = () => {
    setCookie("theme", getCookie("theme") == 'dark' ? 'light' : 'dark');
    setTheme();
  }

  useEffect(() => {
    const setThemeToSystem = (event: MediaQueryListEvent | MediaQueryList) => {
      setCookie('theme', event.matches ? 'dark' : 'light');
      setTheme();
    };
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", setThemeToSystem);
    if(typeof getCookie('theme') === 'undefined') setThemeToSystem(mediaQuery);
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