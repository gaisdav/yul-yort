import { Control } from "react-hook-form";
import { ILocalityEntity } from "../../../../../data/Locality";
import { UseFormSetValue } from "react-hook-form/dist/types/form";
import { IFormData } from "../types";

export interface IFormInputs {
  control: Control<IFormData>;
  /** Пункт отбытия. */
  origin?: ILocalityEntity;
  /** Пункт назначения. */
  destination?: ILocalityEntity;
  localitiesLoading: boolean;
  /** Метод получения списка населенных пунктов. */
  localities: ILocalityEntity[] | null;
  setValue: UseFormSetValue<IFormData>;
}

export interface IFormActions {
  onExpand: () => void;
  loading: boolean | undefined;
  minified?: boolean;
}
