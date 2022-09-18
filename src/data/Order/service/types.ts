import { IOrder, IOrderRequestParams } from "../entity/types";

export interface IOrderService {
  getOrderList(params: IOrderRequestParams): Promise<IOrder[]>;
}
