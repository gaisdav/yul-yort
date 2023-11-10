import { ILocalityDTO } from "../entity";

export interface ILocalityRepository {
  getList: (searchValue: string) => Promise<ILocalityDTO[]>;
}
