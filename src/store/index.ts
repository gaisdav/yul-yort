import {
  ILibs,
  IStoreRepositories,
  IStoreServices,
  IStoreViewModels,
} from "./types";
import { Api } from "../libs/api";
import { AppVM } from "../view/viewModels/App";
import { OrderRepository, OrderService } from "../data/Order";
import { OrderVM } from "../view/viewModels/Order";

const libs: ILibs = {
  api: new Api(),
};

const repositories: IStoreRepositories = {
  order: new OrderRepository(libs.api),
};

const services: IStoreServices = {
  order: new OrderService(repositories.order),
};

export const viewModels: IStoreViewModels = {
  order: new OrderVM(services.order),
  app: new AppVM(),
};
