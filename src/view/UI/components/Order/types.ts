import { IOrder } from "../../../../data/Order";

export interface IOrderProps
  extends Pick<IOrder, "phoneValues" | "agencyName" | "priceValue"> {}
