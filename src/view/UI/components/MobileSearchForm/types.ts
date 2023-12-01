import { ILocalityEntity } from "../../../../data/Locality";

export enum TYPE_POINT {
  Origin = "origin",
  Destination = "destination",
}

export type TPoint = TYPE_POINT.Destination | TYPE_POINT.Origin;

export interface IFormData {
  originId: ID;
  destinationId: ID;
}

export interface IMobileFormProps {
  localities: ILocalityEntity[] | null;
  getList: (value: string) => void;
  loading: boolean;
  onSearch: (data: IFormData) => void;
}

export interface ISearchLocality {
  label: string;
  isOpen: boolean;
  closeInputLayer: () => void;
  setLocation: (locality: ILocalityEntity) => void;
  from: string | undefined;
  searchLocality: (event: React.ChangeEvent<HTMLInputElement>) => void;
  localities: ILocalityEntity[] | null;
  loading: boolean;
}
