import { IOrderService } from "../data/services/Order/types";
import { IOrderRepository } from "../data/repositories/Order/types";
import { IOrderVM } from "../view/viewModels/Order/types";
import { IApi } from "../libs/api/types";
import { OrderDomain } from "../data/entities/Order";
import { IAppVM } from "../view/viewModels/App/types";

export interface ILibs {
  api: IApi;
}

export interface IStoreDomains {
  order: OrderDomain;
}

export interface IStoreServices {
  order: IOrderService;
}

export interface IStoreRepositories {
  order: IOrderRepository;
}

export interface IStoreViewModels {
  order: IOrderVM;
  app: IAppVM;
}
