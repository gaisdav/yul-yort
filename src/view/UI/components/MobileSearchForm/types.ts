import { ILocalityEntity } from "../../../../data/Locality";

export enum TYPE_POINT {
  Origin = "origin",
  Destination = "destination",
}

export enum TYPE_POINT_PlACEHOLDER {
  Origin = "Откуда",
  Destination = "Куда",
}

export type TPoint = TYPE_POINT.Destination | TYPE_POINT.Origin;

export interface IFormData {
  originId: ID;
  destinationId: ID;
}

export interface IMobileFormProps {
  localities: ILocalityEntity[] | null;
  getList: (value?: string) => void;
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

export interface IFormLocalityName {
  toggleLocationLayer: (a: TPoint) => void;
  typePoint: TYPE_POINT;
  pointName: string;
  ID: ID;
  placeholderHTML: TYPE_POINT_PlACEHOLDER;
}

export interface ILocalities {
  localities: ILocalityEntity[];
  setLocation: (locality: ILocalityEntity) => void;
}
