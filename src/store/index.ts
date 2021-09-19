import {
  IStoreDomains,
  IStoreRepositories,
  IStoreServices,
  IStoreViewModels,
} from "./types";
import { OrderService } from "../data/services/Order";
import { OrderRepository } from "../data/repositories/Order";
import { OrderVM } from "../view/viewModels/Order";
import { OrderDomain } from "../data/domainModels/Order";
import { Api } from "../libs/api";

const domains: IStoreDomains = {
  order: new OrderDomain(),
};

const repositories: IStoreRepositories = {
  order: new OrderRepository(new Api()),
};

const services: IStoreServices = {
  order: new OrderService(repositories.order),
};

export const viewModels: IStoreViewModels = {
  order: new OrderVM(domains.order, services.order),
};
