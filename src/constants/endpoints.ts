import { CONSTANTS } from "./globalConstants";

//FIXME: настроить через глобальные переменные
export const baseUrl = CONSTANTS.isDev
  ? "http://localhost:9000/"
  : "http://yul-yort.ru/api";

export enum EEndpoints {
  ORDERS = "/api/orders",
  LOCALITIES = "/api/localities",
}
