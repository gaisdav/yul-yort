import { IOrderResponseDTO } from "../../../data/Order";

export const orders: IOrderResponseDTO[] = [
  {
    id: "123444",
    currencyISO: "RUB",
    agencyName: "Туган як",
    price: 1000,
  },
  {
    id: "123",
    currencyISO: "RUB",
    agencyName: "Туган як",
    agencyPhones: ["9999999999", "9998999554", "0000000000", "4444444444"],
    price: 1000,
  },
  {
    id: "456",
    currencyISO: "RUB",
    agencyName: "Иремель",
    agencyPhones: ["9998999554"],
  },
  {
    id: "466",
    currencyISO: "RUB",
    agencyName: "Иремель",
    agencyPhones: ["9998999554", "9998999554"],
    price: 1150,
  },
  {
    id: "486",
    currencyISO: "RUB",
    agencyName: "Иремель",
    agencyPhones: ["9998999554", "9998999554"],
    price: 1150,
  },
  {
    id: "586",
    currencyISO: "RUB",
    agencyName: "Иремель",
  },
];
