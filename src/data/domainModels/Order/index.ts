import { makeAutoObservable } from "mobx";
import { ECurrencyISO, IOrderDomain } from "./types";
import { currenciesDictionary } from "./currenciesDictionary";

export class OrderDomain implements IOrderDomain {
  id: ID = "";
  agencyName: string = "";
  currencyISO: ECurrencyISO = ECurrencyISO.RUB;
  price?: number;
  agencyPhone?: string[];
  // нужен ли флаг возможности перевозки посылок?

  get priceValue(): string | undefined {
    if (!this.price) {
      return void 0;
    }

    return `${this.price} ${
      currenciesDictionary[this.currencyISO] || this.currencyISO
    }}`;
  }

  get phoneValues(): string[] | undefined {
    if (!this.agencyPhone || !this.agencyPhone.length) {
      return void 0;
    }

    return this.agencyPhone.map((phone) => `+7 ${phone}`);
  }

  constructor() {
    makeAutoObservable(this);
  }
}
