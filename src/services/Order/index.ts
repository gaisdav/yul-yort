import { IOrderService } from "./types";
import {
  IOrderDomain,
  IOrderRequestParams,
} from "../../domainModels/Order/types";
import { IOrderRepository } from "../../repositories/Order/types";
import { DTOMapper } from "./mappers/DTOMapper";

export class OrderService implements IOrderService {
  constructor(private repository: IOrderRepository) {}

  async getOrderList(
    params: IOrderRequestParams,
    orderDomain: IOrderDomain
  ): Promise<IOrderDomain[]> {
    const orders = await this.repository.getOrderList(params);

    return orders.map((orderDTO) => DTOMapper(orderDTO, orderDomain));
  }
}
