import { Control } from "react-hook-form";
import { ILocalityEntity } from "../../../../../data/Locality";

//TODO: исправить any
export interface IFormInputs {
  control: Control<any>;
  /** Пункт отбытия. */
  origin?: ILocalityEntity;
  /** Пункт назначения. */
  destination?: ILocalityEntity;
  localitiesLoading: boolean;
  /** Метод получения списка населенных пунктов. */
  onGetLocalities: () => Promise<void>;
  /** Метод получения списка населенных пунктов. */
  localities: ILocalityEntity[] | null;
}

export interface IFormButton {
  loading: boolean | undefined;
}
