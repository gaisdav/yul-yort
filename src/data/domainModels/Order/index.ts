import { makeAutoObservable } from "mobx";
import { ECurrencyISO, IOrderDomain } from "./types";
import { currenciesDictionary } from "./currenciesDictionary";

export class OrderDomain implements IOrderDomain {
  id: ID = "";
  name: string = "";
  phoneNumber: string = "";
  price?: number;
  currencyISO: ECurrencyISO = ECurrencyISO.RUB;
  // нужен ли флаг возможности перевозки посылок?

  get currency(): string | ECurrencyISO {
    return currenciesDictionary[this.currencyISO] || this.currencyISO;
  }

  constructor() {
    makeAutoObservable(this);
  }
}
