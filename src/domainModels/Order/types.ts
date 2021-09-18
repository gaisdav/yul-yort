export enum ECurrency {
    RUB = '₽'
}

export interface IOrderDomain {
    id: ID;
    name: string;
    phoneNumber: string;
    price?: number;
    currency: ECurrency;
}

export interface IOrderResponseDTO extends Required<IOrderDomain> {
}

export interface IOrderRequestParams {
    origin: string;
    destination: string;
}