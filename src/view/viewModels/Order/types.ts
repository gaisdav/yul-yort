import { IBaseVM } from "../types";
import { IOrder, IOrderRequestParams } from "../../../data/Order";

export interface IOrderVM extends IBaseVM {
  orderList: IOrder[] | null;

  getList: (params: IOrderRequestParams) => Promise<void>;
}
