import { IOrderRepository } from "./types";
import {
  IOrderRequestParams,
  IOrderResponseDTO,
} from "../../domainModels/Order/types";
import { Endpoints } from "../../constants/endpoints";

export class OrderRepository implements IOrderRepository {
  async getOrderList(
    params: IOrderRequestParams
  ): Promise<IOrderResponseDTO[]> {
    const orders = await fetch(Endpoints.orders);

    return orders.json();
  }
}
