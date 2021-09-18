import {IBaseVM} from "../types";
import {IOrderDomain, IOrderRequestParams} from "../../domainModels/Order/types";

export interface IOrderVM extends IBaseVM {
    orderList: IOrderDomain[];

    getList: (params: IOrderRequestParams) => void;
}