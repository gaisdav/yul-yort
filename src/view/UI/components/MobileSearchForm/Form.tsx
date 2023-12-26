import React, { FC, useState } from "react";
import css from "./styles.module.scss";

import { Button, Paper } from "@mui/material";
import SearchLocality from "./SearchLocality";
import { ILocalityEntity } from "../../../../data/Locality";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormData, IMobileFormProps, TPoint, TYPE_POINT } from "./types";

const MobileForm: FC<IMobileFormProps> = ({
  localities = [],
  getList,
  loading,
  onSearch,
}) => {
  // FORM
  const { handleSubmit, setValue } = useForm<IFormData>();

  // STATES
  const [isOriginModalOpen, setIsOriginModalOpen] = useState(false);
  const [isToModalOpen, setIsToModalOpen] = useState(false);
  const [pointName, setPointName] = useState({
    origin: "",
    destination: "",
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    onSearch(data);
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
          <div
            onClick={() => toggleLocationLayer(TYPE_POINT.Origin)}
            className={css.from}
          >
            {pointName.origin ? (
              <span className={css.formLocalityName}>{pointName.origin}</span>
            ) : (
              <span>Откуда</span>
            )}
          </div>
          <div
            onClick={() => toggleLocationLayer(TYPE_POINT.Destination)}
            className={css.to}
          >
            {pointName.destination ? (
              <span className={css.formLocalityName}>
                {pointName.destination}
              </span>
            ) : (
              <span>Куда</span>
            )}
          </div>
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
