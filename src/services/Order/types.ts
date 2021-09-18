import {IOrderDomain, IOrderRequestParams} from "../../domainModels/Order/types";

export interface IOrderService {
    getOrderList(
        params: IOrderRequestParams,
        domain: IOrderDomain
    ): IOrderDomain[]
}