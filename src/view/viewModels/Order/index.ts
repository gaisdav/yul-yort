import { BaseVM } from "../BaseVM";
import { IOrderVM } from "./types";

import { action, makeObservable, observable } from "mobx";
import {
  IOrder,
  IOrderRequestParams,
  IOrderService,
} from "../../../data/Order";

export class OrderVM extends BaseVM implements IOrderVM {
  orderList: IOrder[] | null = null;

  constructor(private service: IOrderService) {
    super();
    makeObservable(this, {
      orderList: observable,
      getList: action,
    });
  }

  async getList(params: IOrderRequestParams) {
    this.setLoading();
    this.unsetError();

    try {
      this.orderList = await this.service.getOrderList(params);
    } catch (err) {
      this.setError(err);
    } finally {
      this.unsetLoading();
    }
  }
}
