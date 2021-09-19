import { IBaseVM } from "../types";
import {
  IOrderDomain,
  IOrderRequestParams,
} from "../../../data/domainModels/Order/types";

export interface IOrderVM extends IBaseVM {
  orderList: IOrderDomain[];

  getList: (params: IOrderRequestParams) => Promise<void>;
}
