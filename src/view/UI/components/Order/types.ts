import { IOrderDomain } from "../../../../data/entities/Order/types";

export interface IOrderProps
  extends Pick<IOrderDomain, "phoneValues" | "agencyName" | "priceValue"> {}
