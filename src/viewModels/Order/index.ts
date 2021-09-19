import { makeAutoObservable } from "mobx";
import { BaseVM } from "../BaseVM";
import { IOrderVM } from "./types";
import {
  IOrderDomain,
  IOrderRequestParams,
} from "../../domainModels/Order/types";
import { IOrderService } from "../../services/Order/types";
import { OrderDomain } from "../../domainModels/Order";

export class OrderVM extends BaseVM implements IOrderVM {
  orderList: IOrderDomain[] = [];

  constructor(private domain: OrderDomain, private service: IOrderService) {
    super();
    makeAutoObservable(this);
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
