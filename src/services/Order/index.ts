import {IOrderService} from "./types";
import {IOrderDomain, IOrderRequestParams} from "../../domainModels/Order/types";
import {IOrderRepository} from "../../repositories/Order/types";
import {DTOMapper} from "./mappers/DTOMapper";

export class OrderService implements IOrderService {
    constructor(private repository: IOrderRepository) {
    }

    getOrderList(
        params: IOrderRequestParams,
        orderDomain: IOrderDomain
    ): IOrderDomain[] {
        return this.repository.getOrderList(params)
            .map((orderDTO) => DTOMapper(orderDTO, orderDomain));
    }
}