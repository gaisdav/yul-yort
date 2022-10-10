import { action, makeObservable, observable, runInAction } from "mobx";
import { ILocalityEntity, ILocalityService } from "../../../data/Locality";
import { BaseVM } from "../BaseVM";
import { ILocalityVM } from "./types";
import { filterLocalities } from "./utils";

export class LocalityVM extends BaseVM implements ILocalityVM {
  private _localities: ILocalityEntity[] | null = null;
  private localitiesErrorText = "Не найдено";

  searchValue = "";

  get localities(): ILocalityEntity[] | null {
    if (!this._localities) {
      return this._localities;
    }

    return filterLocalities(this._localities, this.searchValue);
  }

  constructor(private service: ILocalityService) {
    super();

    makeObservable(this, {
      searchValue: observable,
      getList: action,
    });
  }

  searchLocality = (value: string): void => {
    this.searchValue = value;
  };

  getList = async (): Promise<void> => {
    console.log("list");
    this.setLoading();
    this.unsetError();

    try {
      const list = await this.service.getList();

      console.log(list);

      runInAction(() => {
        this._localities = list;
      });
    } catch (err) {
      console.log(err);
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  };

  destroy = (): void => {
    this.searchValue = "";
    this._localities = null;
    this.unsetLoading();
    this.unsetError();
  };
}
