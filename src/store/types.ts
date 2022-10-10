import { IApi } from "../libs/api/types";
import { IAppVM } from "../view/viewModels/App/types";
import { ILocalityVM } from "../view/viewModels/Locality/types";
import {
  ILocalityRepository,
  ILocalityService,
  Locality,
} from "../data/Locality";
import { IOrderRepository, IOrderService, Order } from "../data/Order";
import { IOrderVM } from "../view/viewModels/Order/types";

export interface ILibs {
  api: IApi;
}

export interface IStoreDomains {
  order: Order;
  locality: Locality;
}

export interface IStoreServices {
  order: IOrderService;
  locality: ILocalityService;
}

export interface IStoreRepositories {
  order: IOrderRepository;
  locality: ILocalityRepository;
}

export interface IStoreViewModels {
  order: IOrderVM;
  app: IAppVM;
  locality: ILocalityVM;
}
