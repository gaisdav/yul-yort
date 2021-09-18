import {IOrderRepository} from "./types";
import {ECurrency, IOrderRequestParams, IOrderResponseDTO} from "../../domainModels/Order/types";

export class OrderRepository implements IOrderRepository {
    getOrderList(params: IOrderRequestParams): IOrderResponseDTO[] {
        return [{
            id: '123',
            currency: ECurrency.RUB,
            name: 'Туган як',
            phoneNumber: '9999999999',
            price: 1000
        },{
            id: '456',
            currency: ECurrency.RUB,
            name: 'Иремель',
            phoneNumber: '9998999554',
            price: 1150
        }];
    }

}