import { rest } from "msw";

export const handlers = [
  rest.get("/orders", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "123",
          currency: "RUR",
          name: "Туган як",
          phoneNumber: "9999999999",
          price: 1000,
        },
        {
          id: "456",
          currency: "RUR",
          name: "Иремель",
          phoneNumber: "9998999554",
          price: 1150,
        },
      ])
    );
  }),
];
