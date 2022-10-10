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
import { LocalityVM } from "../view/viewModels/Locality";
import { LocalityRepository, LocalityService } from "../data/Locality";

const libs: ILibs = {
  api: new Api(),
};

const repositories: IStoreRepositories = {
  order: new OrderRepository(libs.api),
  locality: new LocalityRepository(libs.api),
};

const services: IStoreServices = {
  order: new OrderService(repositories.order),
  locality: new LocalityService(repositories.locality),
};

export const viewModels: IStoreViewModels = {
  order: new OrderVM(services.order),
  app: new AppVM(),
  locality: new LocalityVM(services.locality),
};
