import { IOrderService } from "../data/services/Order/types";
import { IOrderRepository } from "../data/repositories/Order/types";
import { IOrderVM } from "../view/viewModels/Order/types";
import { IOrderDomain } from "../data/domainModels/Order/types";

export interface IStoreDomains {
  order: IOrderDomain;
}

export interface IStoreServices {
  order: IOrderService;
}

export interface IStoreRepositories {
  order: IOrderRepository;
}

export interface IStoreViewModels {
  order: IOrderVM;
}
