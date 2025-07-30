export function setCookie(cname: string, cvalue: string, maxage: number = 2592000, path: string = "/lorenzo-portfolio") { // âge par défaut : 30 jours
  document.cookie = cname + "=" + cvalue + ";" + "max-age=" + maxage.toString() + ";" + `path=${path}`;
}

export function getCookie(cname: string): string | undefined {
  const name: string = cname + "=";
  const decodedCookie: string = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while(c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if(c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return undefined;
}

export function setPageCookie(route: string) {
  if(getCookie("cookiesaccept") === 'true') setCookie("currentpage", route as string)
}