import {IOrderDomain, IOrderResponseDTO} from "../../../domainModels/Order/types";

export const DTOMapper = (dto: IOrderResponseDTO, domain: IOrderDomain): IOrderDomain => {
    const newDomain: IOrderDomain = {...domain};

    newDomain.id = dto.id;
    newDomain.name = dto.name;
    newDomain.price = dto.price;
    newDomain.phoneNumber = dto.phoneNumber;
    newDomain.currency = dto.currency;

    return newDomain
}