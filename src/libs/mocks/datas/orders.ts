import {
  ECurrencyISO,
  IOrderResponseDTO,
} from "../../../data/domainModels/Order/types";

export const orders: IOrderResponseDTO[] = [
  {
    id: "123",
    currencyISO: ECurrencyISO.RUB,
    agencyName: "Туган як",
    agencyPhone: ["9999999999", "9998999554", "0000000000", "4444444444"],
    price: 1000,
  },
  {
    id: "456",
    currencyISO: ECurrencyISO.RUB,
    agencyName: "Иремель",
    agencyPhone: ["9998999554"],
  },
  {
    id: "466",
    currencyISO: ECurrencyISO.RUB,
    agencyName: "Иремель",
    agencyPhone: ["9998999554", "9998999554"],
    price: 1150,
  },
  {
    id: "486",
    currencyISO: ECurrencyISO.RUB,
    agencyName: "Иремель",
    price: 1150,
  },
  {
    id: "586",
    currencyISO: ECurrencyISO.RUB,
    agencyName: "Иремель",
  },
];
