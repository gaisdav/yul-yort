import {
  IOrderRequestParams,
  IOrderResponseDTO,
} from "../../entities/Order/types";

export interface IOrderRepository {
  getOrderList: (params: IOrderRequestParams) => Promise<IOrderResponseDTO[]>;
}
