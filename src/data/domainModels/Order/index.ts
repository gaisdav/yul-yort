import { makeAutoObservable } from "mobx";
import { ECurrencyISO, IOrderDomain } from "./types";
import { currenciesDictionary } from "./currenciesDictionary";

export class OrderDomain implements IOrderDomain {
  id: ID = "";
  agencyName: string = "";
  agencyPhone: string = "";
  price?: number;
  currencyISO: ECurrencyISO = ECurrencyISO.RUB;
  // нужен ли флаг возможности перевозки посылок?

  get priceValue(): string {
    if (!this.price) {
      return "Цена не указана";
    }

    return `${this.price} ${
      currenciesDictionary[this.currencyISO] || this.currencyISO
    }}`;
  }

  get phoneValue(): string {
    if (!this.agencyPhone) {
      return "Телефон не указан";
    }

    return `+7 ${this.agencyPhone}`;
  }

  constructor() {
    makeAutoObservable(this);
  }
}
