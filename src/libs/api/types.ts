import { EEndpoints } from "../../constants";

export interface IApi {
  get<R, P = undefined>(path: EEndpoints, params?: P): Promise<R>;
  post<R, P>(path: EEndpoints, params?: P): Promise<R>;
}
