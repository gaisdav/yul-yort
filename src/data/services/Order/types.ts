import {
  IOrderDomain,
  IOrderRequestParams,
} from "../../entities/Order/types";

export interface IOrderService {
  getOrderList(params: IOrderRequestParams): Promise<IOrderDomain[]>;
}
