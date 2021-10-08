import { IRoutes } from "./types";

const routes: IRoutes = [
  { name: "home", path: "/" },
  {
    name: "orders",
    path: "/orders",
    onActivate: (store, params) => {
      return store.order.getList({
        origin: params?.origin,
        destination: params?.destination,
      });
    },
  },
];

export default routes;
