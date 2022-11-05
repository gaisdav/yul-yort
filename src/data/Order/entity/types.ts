import { IAgencyEntity, IAgencyResponseDTO } from "../../Agency";
import { IRouteDTO, IRouteEntity } from "../../Route";
import { ECurrencyISO } from "../../../constants";

export interface IOrderEntity {
  id: ID;
  agency: IAgencyEntity;
  route: IRouteEntity;
  price: number;
  currencyISO: ECurrencyISO;
}

export interface IOrderResponseDTO
  extends Omit<IOrderEntity, "id" | "agency" | "route"> {
  _id: string;
  agency: IAgencyResponseDTO;
  route: IRouteDTO;
}

export interface IOrderRequestParams {
  origin?: string;
  destination?: string;
}
