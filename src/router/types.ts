import { DefaultDependencies, Route } from "router5/dist/types/router";
import { IStoreViewModels } from "../store/types";
import { IOrderRequestParams } from "../data/Order";

export type IRoutes = [IHomeRoute, IOrdersRoute<IOrderRequestParams>];

export interface IRoute<P = Record<string, string>>
  extends Route<IDependencies> {
  title?: string;
  onActivate?: (store: IStoreViewModels, params?: P) => Promise<void>;
}

export interface IDependencies extends DefaultDependencies {
  store: IStoreViewModels;
  routes: IRoutes;
}

interface IHomeRoute extends IRoute {}
interface IOrdersRoute<P> extends IRoute<P> {}
