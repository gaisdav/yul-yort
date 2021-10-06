import { useContext } from "react";
import { IStoreViewModels } from "../../../store/types";
import { StoreContext } from "../providers/storeContext";

/**
 * Возвращает хранилище целиком.
 */
export const useStore = (): IStoreViewModels => {
  return useContext(StoreContext);
};
