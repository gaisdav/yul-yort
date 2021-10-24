import { DefaultDependencies, Route } from "router5/dist/types/router";
import { IStoreViewModels } from "../store/types";

export type IRoutes = [
  IHomeRoute,
  IOrdersRoute<{
    origin?: string;
    destination?: string;
  }>
];

export interface IRoute<P = Record<string, string>>
  extends Route<IDependencies> {
  onActivate?: (store: IStoreViewModels, params?: P) => Promise<void>;
}

export interface IDependencies extends DefaultDependencies {
  store: IStoreViewModels;
  routes: IRoutes;
}

interface IHomeRoute extends IRoute {}
interface IOrdersRoute<P> extends IRoute<P> {}
