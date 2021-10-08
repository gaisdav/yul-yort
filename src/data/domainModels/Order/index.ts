import { computed, makeObservable, observable } from "mobx";
import { ECurrencyISO, IOrderDomain } from "./types";
import { currenciesDictionary } from "./currenciesDictionary";

export class OrderDomain implements IOrderDomain {
  id: ID = "";
  agencyName: string = "";
  currencyISO: ECurrencyISO = ECurrencyISO.RUB;
  price?: number;
  agencyPhones?: string[];

  constructor() {
    makeObservable(this, {
      id: observable,
      agencyName: observable,
      currencyISO: observable,
      price: observable,
      agencyPhones: observable,
      priceValue: computed,
      phoneValues: computed,
    });
  }

  get priceValue(): string | undefined {
    if (!this.price) {
      return void 0;
    }

    return `${this.price} ${
      currenciesDictionary[this.currencyISO] || this.currencyISO
    }}`;
  }

  get phoneValues(): string[] | undefined {
    if (!this.agencyPhones || !this.agencyPhones.length) {
      return void 0;
    }

    return this.agencyPhones.map((phone) => `+7 ${phone}`);
  }
}
