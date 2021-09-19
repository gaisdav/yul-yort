import { rest } from "msw";
import {
  ECurrencyISO,
  IOrderResponseDTO,
} from "../../data/domainModels/Order/types";

export const handlers = [
  rest.get("/orders", (req, res, ctx) => {
    return res(
      ctx.json<IOrderResponseDTO[]>([
        {
          id: "123",
          currencyISO: ECurrencyISO.RUB,
          name: "Туган як",
          phoneNumber: "9999999999",
          price: 1000,
        },
        {
          id: "456",
          currencyISO: ECurrencyISO.RUB,
          name: "Иремель",
          phoneNumber: "9998999554",
          price: 1150,
        },
      ])
    );
  }),
];
