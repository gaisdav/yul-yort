import { IRoutes } from "./types";
import { setDocumentTitle } from "../libs/utils";
import { CONSTANTS } from "../constants";

export enum ERouteNames {
  ORDERS = "orders",
  HOME = "home",
}

const routes: IRoutes = [
  {
    name: ERouteNames.HOME,
    path: CONSTANTS.publicUrl || "/",
    onActivate: async (store) => {
      store.locality.getList("");
    },
  },
  {
    name: ERouteNames.ORDERS,
    path: `${CONSTANTS.publicUrl}/orders`,
    onActivate: async (store, params) => {
      if (!params) {
        return;
      }

      const { originId, destinationId } = params;

      store.order.getList({
        originId,
        destinationId,
      });

      await store.locality.getList("");

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
