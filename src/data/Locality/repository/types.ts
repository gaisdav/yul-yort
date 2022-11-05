import { ILocalityDTO } from "../entity";

export interface ILocalityRepository {
  getList: () => Promise<ILocalityDTO[]>;
}
