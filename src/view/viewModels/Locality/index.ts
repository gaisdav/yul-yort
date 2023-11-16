import { action, makeObservable, runInAction } from "mobx";
import { ILocalityEntity, ILocalityService } from "../../../data/Locality";
import { BaseVM } from "../BaseVM";
import { ILocalityVM } from "./types";
import debounce from "debounce";

export class LocalityVM extends BaseVM implements ILocalityVM {
  private _localities: ILocalityEntity[] | null = null;
  private _timerValue: number = 1000;
  private _debounceInstance: any;

  get localities(): ILocalityEntity[] | null {
    return this._localities;
  }

  constructor(private service: ILocalityService) {
    super();

    makeObservable(this, {
      getList: action,
    });
  }

  getList = async (inputValue: string = ""): Promise<void> => {
    this.setLoading();
    this.unsetError();

    try {
      const list = await this.service.getList({search: inputValue});

      runInAction(() => {
        this._localities = list;
      });
      // const getLocalities = async () => {
      //   const list = await this.service.getList({ search: inputValue });
      //   runInAction(() => {
      //     this._localities = list;
      //   });
      //   this.unsetLoading();
      // };

      // if (inputValue) {
      //   if (this._debounceInstance) {
      //     this._debounceInstance.clear();
      //   }

      //   this._debounceInstance = debounce(getLocalities, this._timerValue);

      //   this._debounceInstance();
      // } else {
      //   await getLocalities();
      // }
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
