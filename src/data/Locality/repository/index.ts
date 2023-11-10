import { BaseRepository } from "../../BaseRepository";
import { ILocalityRepository } from "./types";
import { EEndpoints } from "../../../constants";
import { ILocalityDTO } from "../entity";

export class LocalityRepository
  extends BaseRepository
  implements ILocalityRepository
{
  async getList(inputValue: string): Promise<ILocalityDTO[]> {
    return await this.api.get<ILocalityDTO[]>({
      endpoint: EEndpoints.LOCALITIES,
      param: `?search=${inputValue}`,
    });
  }
}
