import {
    IStoreDomains,
    IStoreRepositories,
    IStoreServices,
    IStoreViewModels
} from "./types";
import {OrderService} from "../services/Order";
import {OrderRepository} from "../repositories/Order";
import {OrderVM} from "../viewModels/Order";
import {OrderDomain} from "../domainModels/Order";

const domains: IStoreDomains = {
    order: new OrderDomain(),
}

const repositories: IStoreRepositories = {
    order: new OrderRepository()
}

const services: IStoreServices = {
    order: new OrderService(repositories.order)
}

export const viewModels: IStoreViewModels = {
    order: new OrderVM(domains.order, services.order)
}