import { ILocalityDTO } from "../entity";

export interface IQueries {
  search: string;
}

export interface ILocalityRepository {
  getList: (searchValue: IQueries) => Promise<ILocalityDTO[]>;
}
