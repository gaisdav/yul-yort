import React, { FC, useState } from "react";
import { Button, Paper } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import css from "./styles.module.scss";
import SearchLocality from "./SearchLocality";
import { ILocalityEntity } from "../../../../data/Locality";
import {
  IFormData,
  IFormLocalityName,
  IMobileFormProps,
  TPoint,
  TYPE_POINT,
  POINT_PLACEHOLDER,
} from "./types";

const FormLocalityName: FC<IFormLocalityName> = ({
  toggleLocationLayer,
  typePoint,
  pointName,
  ID,
  placeholderHTML,
  error,
}) => {
  const wrapperClassName = `${css.localityWrap} ${error ? css.error : ""}`;

  return (
    <div
      onClick={() => toggleLocationLayer(typePoint)}
      className={wrapperClassName}
    >
      <span className={(ID && css.localityName) || ""}>{ID && pointName}</span>
      {!ID && <span>{placeholderHTML}</span>}
    </div>
  );
};

const MobileForm: FC<IMobileFormProps> = ({
  localities = [],
  getList,
  loading,
  onSearch,
}) => {
  const { handleSubmit, setValue, getValues } = useForm<IFormData>();
  const originId = getValues("originId");
  const destinationId = getValues("destinationId");
  const [originError, setOriginError] = useState(false);
  const [destinationError, setDestinationError] = useState(false);
  const [isOriginModalOpen, setIsOriginModalOpen] = useState(false);
  const [isToModalOpen, setIsToModalOpen] = useState(false);
  const [pointName, setPointName] = useState({
    origin: null,
    destination: null,
  });

  const onSubmit: SubmitHandler<IFormData> = ({
    originId,
    destinationId,
  }: IFormData) => {
    if (!originId || !destinationId) {
      setOriginError(!originId);
      setDestinationError(!destinationId);
      return;
    }

    onSearch({ originId, destinationId });
  };

  const searchLocality = (event: React.ChangeEvent<HTMLInputElement>) => {
    getList(event.target.value);
  };

  const toggleLocationLayer = (type: TPoint) => {
    getList();
    type === TYPE_POINT.origin
      ? setIsOriginModalOpen(!isOriginModalOpen)
      : setIsToModalOpen(!isToModalOpen);
  };

  const setLocation = (locality: ILocalityEntity, type: TPoint) => {
    toggleLocationLayer(type);
    const updatedPointName = { ...pointName, [type]: locality.name };
    setPointName(updatedPointName);
    type === TYPE_POINT.origin
      ? (setValue("originId", locality.id), setOriginError(false))
      : (setValue("destinationId", locality.id), setDestinationError(false));
  };

  return (
    <>
      <Paper elevation={3} className={css.mobileContainer}>
        <FormLocalityName
          toggleLocationLayer={toggleLocationLayer}
          typePoint={TYPE_POINT.origin}
          ID={originId}
          pointName={pointName.origin}
          placeholderHTML={POINT_PLACEHOLDER.origin}
          error={originError}
        />
        <hr className="line" />
        <FormLocalityName
          toggleLocationLayer={toggleLocationLayer}
          typePoint={TYPE_POINT.destination}
          ID={destinationId}
          pointName={pointName.destination}
          placeholderHTML={POINT_PLACEHOLDER.destination}
          error={destinationError}
        />
      </Paper>

      <div className={css.button}>
        <Button
          onClick={handleSubmit(onSubmit)}
          fullWidth
          variant="contained"
          size="large"
        >
          Найти
        </Button>
      </div>

      {[TYPE_POINT.origin, TYPE_POINT.destination].map((type) => (
        <SearchLocality
          key={type}
          isOpen={type === "origin" ? isOriginModalOpen : isToModalOpen}
          label={POINT_PLACEHOLDER[type]}
          from={pointName[type]}
          setLocation={(locality) => setLocation(locality, type)}
          localities={localities}
          closeInputLayer={() => toggleLocationLayer(type)}
          searchLocality={searchLocality}
          loading={loading}
        />
      ))}
    </>
  );
};

export { MobileForm };
