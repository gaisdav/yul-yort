export interface IAgencyEntity {
  id: ID;
  agencyName: string;
  phones?: string[];
  createdAt: string;
  updatedAt: string;
  description?: string;
}

export interface IAgencyResponseDTO extends Omit<IAgencyEntity, "id"> {
  _id: string;
}
