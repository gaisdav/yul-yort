import { ILocalityEntity } from "../entity";

export interface ILocalityService {
  getList: (searchValue: string) => Promise<ILocalityEntity[]>;
}
