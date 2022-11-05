import { ILocalityEntity } from "../entity";

export interface ILocalityService {
  getList: () => Promise<ILocalityEntity[]>;
}
