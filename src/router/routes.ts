import { IRoutes } from "./types";

export enum ERouteNames {
  ORDERS = "orders",
  HOME = "home",
}

const routes: IRoutes = [
  {
    name: ERouteNames.HOME,
    path: "/",
    onActivate: async (store) => {
      store.locality.getList();
    },
  },
  {
    name: ERouteNames.ORDERS,
    path: "/orders",
    onActivate: async (store, params) => {
      if (!params) {
        return;
      }

      const { originId, destinationId } = params;

      store.order.getList({
        originId,
        destinationId,
      });

      store.locality.getList();
    },
  },
];

export default routes;
