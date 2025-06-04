import {useEffect, useState} from 'react';
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

  const switchTheme = () => {
    document.documentElement.style.colorScheme = getCookie("theme") == 'dark' ? 'light' : 'dark';
    setCookie("theme", document.documentElement.style.colorScheme);
    setButtonIcon(getCookie("theme") as string);
  }

  const handleChange = (event: MediaQueryListEvent) => {
    setCookie('theme', event.matches ? 'dark' : 'light')
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if(typeof getCookie('theme') === 'undefined') {
      setCookie('theme', mediaQuery.matches ? 'dark' : 'light')
    }
    document.documentElement.style.colorScheme = getCookie("theme") as string;
    setButtonIcon(getCookie("theme") as string);
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <button onClick={switchTheme}>
      <FontAwesomeIcon icon={icon} /> {'\t'}
      Thème
    </button>
  );
}

export default DarkModeToggle;