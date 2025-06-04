import {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-regular-svg-icons";
import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {getCookie, setCookie} from "../util/cookies.ts";

function DarkModeToggle() {

  const [icon, setIcon] = useState<IconDefinition>(
    getCookie("theme") == 'dark' ? faMoon : faSun
  );

  const switchTheme = () => {
    document.documentElement.style.colorScheme = getCookie("theme") == 'dark' ? 'light' : 'dark';
    setCookie("theme", document.documentElement.style.colorScheme);
    setIcon(getCookie("theme") == 'dark' ? faMoon : faSun);
  }

  const handleChange = (event: MediaQueryListEvent) => {
    setCookie('theme', event.matches ? 'dark' : 'light')
  };

  useEffect(() => {
    if(typeof getCookie('theme') !== 'undefined')
      document.documentElement.style.colorScheme = getCookie("theme") as string;
    setIcon(getCookie("theme") == 'dark' ? faMoon : faSun);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
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