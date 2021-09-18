import {ECurrency, IOrderDomain} from "./types";
import {makeAutoObservable} from "mobx";

export class OrderDomain implements IOrderDomain {
    id: ID = '';
    name: string = '';
    phoneNumber: string = '';
    price?: number;
    currency: ECurrency = ECurrency.RUB;

    constructor() {
        makeAutoObservable(this);
    }
}