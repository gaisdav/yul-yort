import { IApi } from "../libs/api/types";
import { IAppVM } from "../view/viewModels/App/types";
import { IOrderVM } from "../view/viewModels/Order/types";
import { IOrderRepository, IOrderService, Order } from "../data/Order";

export interface ILibs {
  api: IApi;
}

export interface IStoreDomains {
  order: Order;
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
