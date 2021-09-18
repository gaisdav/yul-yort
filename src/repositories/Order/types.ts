import {IOrderRequestParams, IOrderResponseDTO} from "../../domainModels/Order/types";

export interface IOrderRepository {
    getOrderList: (params: IOrderRequestParams) => IOrderResponseDTO[]
}

