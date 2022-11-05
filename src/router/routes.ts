import { IRoutes } from "./types";

const routes: IRoutes = [
  { name: "home", path: "/" },
  {
    name: "orders",
    path: "/orders",
    onActivate: async (store, params) => {
      if (!params) {
        return;
      }

      const { origin, destination } = params;

      store.order.getList({
        origin,
        destination,
      });

      store.locality.getList();
    },
  },
];

export default routes;
