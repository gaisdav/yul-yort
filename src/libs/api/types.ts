import { EEndpoints } from "../../constants/EEndpoints";

export interface IApi {
  get<R, P = undefined>(path: EEndpoints, params?: P): Promise<R>;
  post<R, P>(path: EEndpoints, params?: P): Promise<R>;
}
