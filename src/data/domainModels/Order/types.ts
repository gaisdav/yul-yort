export enum ECurrencyISO {
  RUB = "RUB",
}

export interface IOrderDomain {
  id: ID;
  agencyName: string;
  agencyPhone: string;
  price?: number;
  currencyISO: ECurrencyISO;

  priceValue: string;
  phoneValue: string;
}

export interface IOrderResponseDTO
  extends Pick<
    IOrderDomain,
    "price" | "id" | "agencyName" | "currencyISO" | "agencyPhone"
  > {
  price: number;
}

export interface IOrderRequestParams {
  origin: string;
  destination: string;
}
