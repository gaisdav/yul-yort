import { BaseVM } from "../BaseVM";
import { IAppVM, TTheme } from "./types";
import { makeObservable, observable } from "mobx";

export class AppVM extends BaseVM implements IAppVM {
  theme: TTheme;

  constructor() {
    super();
    makeObservable(this, {
      theme: observable,
    });
    // TODO получать через сервис?
    this.theme = localStorage.getItem("theme") === "dark" ? "dark" : "light";
  }

  setTheme(theme: TTheme) {
    try {
      // TODO сохранять через сервис?
      localStorage.setItem("theme", theme);
      this.theme = theme;
    } catch (err) {
      throw err;
    }
  }
}
