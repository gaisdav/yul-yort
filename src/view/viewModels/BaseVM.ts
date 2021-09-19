import { IBaseVM } from "./types";
import { action, makeObservable, observable } from "mobx";

export class BaseVM implements IBaseVM {
  loading: boolean = false;

  constructor() {
    makeObservable(this, {
      loading: observable,
      setLoading: action,
      unsetLoading: action,
    });
  }

  setLoading(): void {
    this.loading = true;
  }

  unsetLoading(): void {
    this.loading = false;
  }
}
