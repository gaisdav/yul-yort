import { IBaseVM } from "../types";
import { ILocalityEntity } from "../../../data/Locality";

export interface ILocalityVM extends IBaseVM {
  searchValue: string;
  localities: ILocalityEntity[] | null;
  searchLocality: (value: string) => void;
  getList: () => Promise<void>;
}
