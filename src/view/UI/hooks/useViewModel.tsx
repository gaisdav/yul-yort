import { useContext } from "react";
import { IStoreViewModels } from "../../../store/types";
import { StoreContext } from "../providers/storeContext";

/**
 * Возвращает запрошенную ViewModel из хранилища.
 *
 * @param {keyof IStoreViewModels} key - ключ ViewModel-и в хранилище.
 */
export const useViewModel = (key: keyof IStoreViewModels) => {
  const store = useContext(StoreContext);

  return store[key];
};
