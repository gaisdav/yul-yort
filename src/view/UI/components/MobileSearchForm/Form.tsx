import React, { FC, useState } from "react";
import css from "./styles.module.scss";

import { Button, Paper } from "@mui/material";
import SearchLocality from "./SearchLocality";
import { ILocalityEntity } from "../../../../data/Locality";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  IFormData,
  IFormLocalityName,
  IMobileFormProps,
  TPoint,
  TYPE_POINT,
  TYPE_POINT_PlACEHOLDER,
} from "./types";

const FormLocalityName: FC<IFormLocalityName> = ({
  toggleLocationLayer,
  typePoint,
  pointName,
  ID,
  placeholderHTML,
}) => {
  return (
    <div
      onClick={() => toggleLocationLayer(typePoint)}
      className={css.localityWrap}
    >
      <span className={(ID && css.localityName) || ""}>
        {(ID && pointName) || placeholderHTML}
      </span>
    </div>
  );
};

const MobileForm: FC<IMobileFormProps> = ({
  localities = [],
  getList,
  loading,
  onSearch,
}) => {
  // FORM
  const { handleSubmit, setValue, getValues } = useForm<IFormData>();
  const originId = getValues("originId");
  const destinationId = getValues("destinationId");

  // STATES
  const [isOriginModalOpen, setIsOriginModalOpen] = useState(false);
  const [isToModalOpen, setIsToModalOpen] = useState(false);
  const [pointName, setPointName] = useState({
    origin: "",
    destination: "",
  });

  //TODO: добавить задачу, если города не заполнены как будем показывать ошибку
  const onSubmit: SubmitHandler<IFormData> = ({
    originId,
    destinationId,
  }: IFormData) => {
    if (!originId || !destinationId) return;

    onSearch({ originId, destinationId });
  };

  const searchLocality = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    getList(value);
  };

  const toggleLocationLayer = (type: TPoint) => {
    getList();
    if (type === TYPE_POINT.Origin) {
      setIsOriginModalOpen(!isOriginModalOpen);
    } else {
      setIsToModalOpen(!isToModalOpen);
    }
  };

  const setLocation = (locality: ILocalityEntity, type: TPoint) => {
    toggleLocationLayer(type);
    const updatedPointName = { ...pointName, [type]: locality.name };
    setPointName(updatedPointName);
    if (type === TYPE_POINT.Origin) {
      setValue("originId", locality.id);
    } else {
      setValue("destinationId", locality.id);
    }
  };

  return (
    <>
      <Paper elevation={3}>
        <div className={css.mobileContainer}>
          <FormLocalityName
            toggleLocationLayer={toggleLocationLayer}
            typePoint={TYPE_POINT.Origin}
            ID={originId}
            pointName={pointName.origin}
            placeholderHTML={TYPE_POINT_PlACEHOLDER.Origin}
          />
          <FormLocalityName
            toggleLocationLayer={toggleLocationLayer}
            typePoint={TYPE_POINT.Destination}
            ID={destinationId}
            pointName={pointName.destination}
            placeholderHTML={TYPE_POINT_PlACEHOLDER.Destination}
          />
        </div>
      </Paper>

      <div className={css.button}>
        <Button
          onClick={handleSubmit(onSubmit)}
          fullWidth
          type="submit"
          variant="contained"
          size="large"
        >
          Найти
        </Button>
      </div>

      <SearchLocality
        isOpen={isOriginModalOpen}
        label="Откуда"
        from={pointName.origin}
        setLocation={(locality) => setLocation(locality, TYPE_POINT.Origin)}
        localities={localities}
        closeInputLayer={() => toggleLocationLayer(TYPE_POINT.Origin)}
        searchLocality={searchLocality}
        loading={loading}
      />

      <SearchLocality
        isOpen={isToModalOpen}
        label="Куда"
        from={pointName.destination}
        setLocation={(locality) =>
          setLocation(locality, TYPE_POINT.Destination)
        }
        closeInputLayer={() => toggleLocationLayer(TYPE_POINT.Destination)}
        localities={localities}
        searchLocality={searchLocality}
        loading={loading}
      />
    </>
  );
};

export { MobileForm };
