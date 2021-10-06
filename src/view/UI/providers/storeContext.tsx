import { createContext, FC } from "react";
import { IStoreViewModels } from "../../../store/types";
import { viewModels } from "../../../store";

export const StoreContext = createContext<IStoreViewModels>(viewModels);

export const StoreProvider: FC = ({ children }) => {
  return (
    <StoreContext.Provider value={viewModels}>{children}</StoreContext.Provider>
  );
};
