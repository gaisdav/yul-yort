import { action, makeObservable, runInAction } from "mobx";
import { ILocalityEntity, ILocalityService } from "../../../data/Locality";
import { BaseVM } from "../BaseVM";
import { ILocalityVM } from "./types";

export class LocalityVM extends BaseVM implements ILocalityVM {
  private _localities: ILocalityEntity[] | null = null;
  private _timerId: NodeJS.Timeout | null = null;
  private _timerValue: number = 1000;

  get localities(): ILocalityEntity[] | null {
    return this._localities;
  }

  constructor(private service: ILocalityService) {
    super();

    makeObservable(this, {
      getList: action,
    });
  }

  getList = async (inputValue: string): Promise<void> => {
    this.setLoading();
    this.unsetError();

    try {
      let list: ILocalityEntity[] | null = [];
      const getLocalities = async () => {
        list = await this.service.getList(inputValue);
      };
      if (inputValue) {
        if (this._timerId) {
          clearTimeout(this._timerId);
        }

        const timeoutPromise = new Promise<void>((resolve) => {
          this._timerId = setTimeout(async () => {
            await getLocalities();
            resolve();
          }, this._timerValue);
        });

        await timeoutPromise;
      } else {
        await getLocalities();
      }

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
