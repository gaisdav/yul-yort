export enum ECurrencyISO {
  RUB = "RUB",
}

export interface IOrderDomain {
  id: ID;
  name: string;
  phoneNumber: string;
  price?: number;
  currencyISO: ECurrencyISO;
  currency: string;
}

export interface IOrderResponseDTO
  extends Pick<
    IOrderDomain,
    "price" | "id" | "name" | "currencyISO" | "phoneNumber"
  > {
  price: number;
}

export interface IOrderRequestParams {
  origin: string;
  destination: string;
}
