import { TCurrencyISO } from "../../../constants";

export interface IOrder {
  id: ID;
  agencyName: string;
  agencyPhones?: string[];
  price?: number;
  currencyISO: TCurrencyISO;

  priceValue?: string;
  phoneValues?: string[];
}

export interface IOrderResponseDTO
  extends Pick<
    IOrder,
    "price" | "id" | "agencyName" | "currencyISO" | "agencyPhones"
  > {}

export interface IOrderRequestParams {
  origin?: string;
  destination?: string;
}
