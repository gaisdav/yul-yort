import { IBaseVM } from "../types";
import {
  IOrderDomain,
  IOrderRequestParams,
} from "../../../data/entities/Order/types";

export interface IOrderVM extends IBaseVM {
  orderList: IOrderDomain[] | null;

  getList: (params: IOrderRequestParams) => Promise<void>;
}
