import React, { FC, useState } from "react";
import css from "./styles.module.scss";

import { Button, Paper } from "@mui/material";
import SearchLocality from "./SearchLocality";
import { ILocalityEntity } from "../../../../data/Locality";
import { SubmitHandler, useForm } from "react-hook-form";

interface MobileFormProps {
  localities: ILocalityEntity[] | null;
  getList: (value: string) => void;
  loading: boolean;
  onSearch: (data: { originId: string; destinationId: string }) => void;
}

interface IFormData {
  originId: ID;
  destinationId: ID;
}

const MobileForm: FC<MobileFormProps> = ({
  localities = [],
  getList,
  loading,
  onSearch,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormData>();
  const [isOpen, setOpen] = useState(false);
  const [isLocationTo, setIsLocationTo] = useState(false);

  //TODO: поиск маршрута
  const onSubmit = (data: any) => {
    console.log("data", data);
    onSearch(data);
  };

  //TODO: отвечает за открытие и за закрытие слоя
  const toggleLocationLayer = (type: "originId" | "destinationId") => {
    if (type === "originId") {
      setOpen(!isOpen);
    } else {
      setIsLocationTo(!isLocationTo);
    }
  };

  //TODO: поиск города
  const searchLocality = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    getList(value);
  };

  //TODO: Устанавливаем состояние
  const setLocation = (
    locality: ILocalityEntity,
    type: "originId" | "destinationId"
  ) => {
    toggleLocationLayer(type);
    setValue(type, locality.id);
  };

  return (
    <>
      <Paper elevation={3}>
        <div className={css.mobileContainer}>
          <div
            onClick={() => toggleLocationLayer("originId")}
            className={css.from}
          >
            {/* {from ? (
              <span className={css.formLocalityName}>{from.name}</span>
            ) : (
              <span>Откуда</span>
            )} */}
            <span>Откуда</span>
          </div>
          <div
            onClick={() => toggleLocationLayer("destinationId")}
            className={css.to}
          >
            {/* {to ? (
              <span className={css.formLocalityName}>{to.name}</span>
            ) : (
              <span>Куда</span>
            )} */}
            <span>Куда</span>
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
        register={register}
        label="Откуда"
        from={"Откуда то"}
        setLocation={(locality) => setLocation(locality, "originId")}
        localities={localities}
        isOpen={isOpen}
        closeInputLayer={() => toggleLocationLayer("originId")}
        searchLocality={searchLocality}
        loading={loading}
      />

      <SearchLocality
        register={register}
        label="Куда"
        from={"Куда то"}
        setLocation={(locality) => setLocation(locality, "destinationId")}
        isOpen={isLocationTo}
        closeInputLayer={() => toggleLocationLayer("destinationId")}
        localities={localities}
        searchLocality={searchLocality}
        loading={loading}
      />
    </>
  );
};

export { MobileForm };
