import {
  IOrderDomain,
  IOrderResponseDTO,
} from "../../../domainModels/Order/types";

export const DTOMapper = (
  dto: IOrderResponseDTO,
  domain: IOrderDomain
): IOrderDomain => {
  const newDomain: IOrderDomain = { ...domain };

  newDomain.id = dto.id;
  newDomain.agencyName = dto.agencyName;
  newDomain.price = dto.price;
  newDomain.agencyPhones = dto.agencyPhones;
  newDomain.currencyISO = dto.currencyISO;

  return newDomain;
};
