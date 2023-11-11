import React, { FC, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { IFormInputs } from "./types";
import { useViewModel } from "../../../hooks/useViewModel";
import styles from "./styles/inputs.module.scss";

export const FormInputs: FC<IFormInputs> = ({
  control,
  localities,
  localitiesLoading,
  origin,
  destination,
  setValue,
}) => {
  const localityVM = useViewModel("locality");

  useEffect(() => {
    origin && setValue("originId", origin?.id);
    destination && setValue("destinationId", destination?.id);
  }, [origin, destination, setValue]);

  const noOptionsText = "Не найдено";
  const loadingText = "Загрузка...";

  const searchLocalities = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = (event.target as HTMLInputElement).value;
    localityVM.getList(searchValue);
  };

  const getLocalities = () => {
    localityVM.getList("");
  };

  return (
    <div className={styles.wrapper}>
      <Controller
        control={control}
        rules={{ required: "Обязательное поле" }}
        name="originId"
        render={({ field: { onChange }, fieldState }) => (
          <Autocomplete
            className={styles.autocompleteWrapper}
            defaultValue={origin}
            loading={localitiesLoading}
            options={localities || []}
            id="originId"
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            fullWidth
            clearOnEscape
            noOptionsText={noOptionsText}
            loadingText={loadingText}
            onChange={(_, data) => {
              onChange(data?.id);
            }}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option.id}>
                  <div>{option.name}</div>
                </li>
              );
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                autoFocus
                label="Откуда"
                placeholder="Откуда"
                variant="standard"
                onChange={searchLocalities}
                onFocus={getLocalities}
              />
            )}
          />
        )}
      />

      <Controller
        control={control}
        rules={{ required: "Обязательное поле" }}
        name="destinationId"
        render={({ field: { onChange }, fieldState }) => (
          <Autocomplete
            className={styles.autocompleteWrapper}
            defaultValue={destination}
            loading={localitiesLoading}
            options={localities || []}
            id="destinationId"
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            fullWidth
            clearOnEscape
            noOptionsText={noOptionsText}
            loadingText={loadingText}
            onChange={(_, data) => {
              onChange(data?.id);
            }}
            renderOption={(props, option) => {
              return (
                <li {...props} key={option.id}>
                  <div>{option.name}</div>
                </li>
              );
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                label="Куда"
                placeholder="Куда"
                variant="standard"
                onChange={searchLocalities}
                onFocus={getLocalities}
              />
            )}
          />
        )}
      />
    </div>
  );
};
