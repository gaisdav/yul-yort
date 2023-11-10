import { Autocomplete, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { IFormInputs } from "./types";
import styles from "./styles//inputs.module.scss";
import { useViewModel } from "../../../hooks/useViewModel";

export const FormInputs: FC<IFormInputs> = ({
  control,
  localities,
  localitiesLoading,
  origin,
  destination,
  setValue,
}) => {
  const localityVM = useViewModel("locality");
  const [getIsLocalitiesLoader, setGetIsLocalitiesLoader] = useState(false);
  useEffect(() => {
    origin && setValue("originId", origin?.id);
    destination && setValue("destinationId", destination?.id);
  }, [origin, destination, setValue]);

  const noOptionsText = "Не найдено";
  const loadingText = "Загрузка...";

  const getLocalities = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setGetIsLocalitiesLoader(true);

    if (localityVM.timerId) {
      clearTimeout(localityVM.timerId);
    }

    localityVM.timerId = setTimeout(() => {
      setGetIsLocalitiesLoader(false);
      localityVM.getList(searchValue);
    }, 1000);
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
            loading={localitiesLoading || getIsLocalitiesLoader}
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
                onChange={getLocalities}
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
            loading={localitiesLoading || getIsLocalitiesLoader}
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
                onChange={getLocalities}
              />
            )}
          />
        )}
      />
    </div>
  );
};
