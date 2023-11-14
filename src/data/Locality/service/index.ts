import { ILocalityService } from "./types";
import { ILocalityRepository } from "../repository/types";
import { ILocalityEntity } from "../entity";
import { Locality } from "../entity";

export class LocalityService implements ILocalityService {
  constructor(private repository: ILocalityRepository) {}

  getList = async (inputValue: string): Promise<ILocalityEntity[]> => {
    const localities = await this.repository.getList({ search: inputValue });

    return localities.map((locality) => new Locality(locality));
  };
}
