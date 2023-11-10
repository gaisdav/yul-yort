import { IBaseVM } from "../types";
import { ILocalityEntity } from "../../../data/Locality";

export interface ILocalityVM extends IBaseVM {
  localities: ILocalityEntity[] | null;
  getList: (searchValue: string) => Promise<void>;
  timerId?: ReturnType<typeof setTimeout> | null;
}
