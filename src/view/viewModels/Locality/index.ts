import { action, makeObservable, runInAction } from "mobx";
import { ILocalityEntity, ILocalityService } from "../../../data/Locality";
import { BaseVM } from "../BaseVM";
import { ILocalityVM } from "./types";

export class LocalityVM extends BaseVM implements ILocalityVM {
  private _localities: ILocalityEntity[] | null = null;

  get localities(): ILocalityEntity[] | null {
    return this._localities;
  }

  constructor(private service: ILocalityService) {
    super();

    makeObservable(this, {
      getList: action,
    });
  }

  getList = async (): Promise<void> => {
    if (this.localities) {
      return;
    }

    this.setLoading();
    this.unsetError();

    try {
      const list = await this.service.getList();

      runInAction(() => {
        this._localities = list;
      });
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  };

  destroy = (): void => {
    this._localities = null;
    this.unsetLoading();
    this.unsetError();
  };
}
