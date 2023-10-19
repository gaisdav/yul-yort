import { IRoutes } from "./types";
import { setDocumentTitle } from "../libs/utils";

export enum ERouteNames {
  ORDERS = "orders",
  HOME = "home",
}

//FIXME: path вынести в config 
const path = process.env.PUBLIC_URL || "/";

const routes: IRoutes = [
  {
    name: ERouteNames.HOME,
    path: `${path}`,
    onActivate: async (store) => {
      store.locality.getList();
    },
  },
  {
    name: ERouteNames.ORDERS,
    path: `${path}/client/orders`,
    onActivate: async (store, params) => {
      if (!params) {
        return;
      }

      const { originId, destinationId } = params;

      store.order.getList({
        originId,
        destinationId,
      });

      await store.locality.getList();

      const origin = store.locality.localities?.find(
        (locality) => locality.id === Number(originId)
      );

      const destination = store.locality.localities?.find(
        (locality) => locality.id === Number(destinationId)
      );

      if (origin && destination) {
        setDocumentTitle(`${origin.name} - ${destination.name}`);
      }
    },
  },
];

export default routes;
