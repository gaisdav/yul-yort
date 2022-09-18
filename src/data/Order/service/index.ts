import { IOrderService } from "./types";
import { IOrder, IOrderRequestParams } from "../entity/types";
import { IOrderRepository } from "../repository/types";
import { Order } from "../entity";

export class OrderService implements IOrderService {
  constructor(private repository: IOrderRepository) {}

  async getOrderList(params: IOrderRequestParams): Promise<IOrder[]> {
    const orders = await this.repository.getOrderList(params);

    return orders.map((orderDTO) => new Order(orderDTO));
  }
}
