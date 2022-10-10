import { rest } from "msw";
import { orders } from "./data/orders";
import { getTimeout } from "./utils/getTimeout";
import { IOrderResponseDTO } from "../../data/Order";
import { localities } from "./data/localities";
import { ILocalityDTO } from "../../data/Locality";
import { EEndpoints } from "../../constants";

export const handlers = [
  rest.get(EEndpoints.ORDER_LIST, (req, res, ctx) => {
    return res(
      ctx.json<IOrderResponseDTO[]>(orders),
      ctx.delay(getTimeout()),
      ctx.status(200)
    );
  }),
  rest.get(EEndpoints.LOCALITY_LIST, (req, res, ctx) => {
    return res(
      ctx.json<ILocalityDTO[]>(localities),
      ctx.delay(getTimeout()),
      ctx.status(200)
    );
  }),
];
