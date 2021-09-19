import { IBaseVM } from "./types";
import { makeAutoObservable } from "mobx";

export class BaseVM implements IBaseVM {
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(): void {
    this.loading = true;
  }

  unsetLoading(): void {
    this.loading = false;
  }
}
