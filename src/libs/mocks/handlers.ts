import { rest } from "msw";
import { orders } from "./data/orders";
import { getTimeout } from "./utils/getTimeout";
import { IOrderResponseDTO } from "../../data/Order";

export const handlers = [
  rest.get("/orders", (req, res, ctx) => {
    return res(
      ctx.json<IOrderResponseDTO[]>(orders),
      ctx.delay(getTimeout()),
      ctx.status(200)
    );
  }),
];
