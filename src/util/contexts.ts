import {createContext} from "react";
import {getCookie} from "./cookies.ts";
import {isHrefMatching} from "./misc.ts";
import * as React from "react";

export type ContextState<T> = {
  state: T,
  action?: React.Dispatch<React.SetStateAction<T>>,
}

export const AuthorizedCookies = createContext<ContextState<number>>({
  state: 0,
})

export const CurrentPage = createContext<ContextState<string>>({
  state: "",
})

export const acContextInitialState =
  getCookie("cookiesaccept") === undefined? 0 : (getCookie("cookiesaccept") === 'true' ? 1 : -1);
export const cpContextInitialState =
  getCookie("currentpage") === undefined || !isHrefMatching(getCookie("currentpage") as string)?
    "" : getCookie("currentpage") as string;