import { BaseVM } from "../BaseVM";
import { IOrderVM } from "./types";
import {
  IOrderDomain,
  IOrderRequestParams,
} from "../../../data/domainModels/Order/types";
import { IOrderService } from "../../../data/services/Order/types";
import { OrderDomain } from "../../../data/domainModels/Order";
import { action, makeObservable, observable } from "mobx";

export class OrderVM extends BaseVM implements IOrderVM {
  orderList: IOrderDomain[] = [];

  constructor(private domain: OrderDomain, private service: IOrderService) {
    super();
    makeObservable(this, {
      orderList: observable,
      getList: action,
    });
  }

  async getList(params: IOrderRequestParams) {
    this.setLoading();

    try {
      this.orderList = await this.service.getOrderList(params, this.domain);
    } finally {
      this.unsetLoading();
    }
  }
}
