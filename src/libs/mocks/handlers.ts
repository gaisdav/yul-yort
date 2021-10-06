import { rest } from "msw";
import { IOrderResponseDTO } from "../../data/domainModels/Order/types";
import { orders } from "./datas/orders";
import { getTimeout } from "./utils/getTimeout";

export const handlers = [
  rest.get("/orders", (req, res, ctx) => {
    return res(ctx.json<IOrderResponseDTO[]>(orders), ctx.delay(getTimeout()));
  }),
];
