import { CONSTANTS } from "./globalConstants";

export const baseUrl = CONSTANTS.isDev
  ? "http://localhost:9000/"
  : window.location.origin;

export enum EEndpoints {
  ORDER_LIST = "/api/order/list",
  LOCALITY_LIST = "/api/locality/list",
}
