import { IOrderService } from "./types";
import {
  IOrderDomain,
  IOrderRequestParams,
} from "../../entities/Order/types";
import { IOrderRepository } from "../../repositories/Order/types";
import { OrderDomain } from "../../entities/Order";

export class OrderService implements IOrderService {
  constructor(private repository: IOrderRepository) {}

  async getOrderList(params: IOrderRequestParams): Promise<IOrderDomain[]> {
    const orders = await this.repository.getOrderList(params);

    return orders.map((orderDTO) => new OrderDomain(orderDTO));
  }
}
