import {IOrderService} from "../services/Order/types";
import {IOrderRepository} from "../repositories/Order/types";
import {IOrderVM} from "../viewModels/Order/types";
import {IOrderDomain} from "../domainModels/Order/types";

export interface IStoreDomains {
    order: IOrderDomain
}

export interface IStoreServices {
    order: IOrderService
}

export interface IStoreRepositories {
    order: IOrderRepository
}

export interface IStoreViewModels {
    order: IOrderVM
}