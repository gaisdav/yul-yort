import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";
import { IFormInputs } from "./types";
import styles from "./styles//inputs.module.scss";

export const FormInputs: FC<IFormInputs> = ({
  control,
  onGetLocalities,
  localities,
  localitiesLoading,
  origin,
  destination,
}) => {
  const noOptionsText = "Не найдено";
  const loadingText = "Загрузка...";

  const handleOpen = async () => {
    await onGetLocalities();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.autocompleteWrapper}>
        <Controller
          control={control}
          rules={{ required: true }}
          name="origin"
          render={({ field: { onChange } }) => (
            <Autocomplete
              loading={localitiesLoading}
              options={localities || []}
              id="origin"
              getOptionLabel={(option) => option.name}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              fullWidth
              defaultValue={origin}
              clearOnEscape
              noOptionsText={noOptionsText}
              loadingText={loadingText}
              onOpen={handleOpen}
              onChange={(_, data) => {
                onChange(data?.id);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  autoFocus
                  label="Откуда"
                  placeholder="Откуда"
                  variant="standard"
                />
              )}
            />
          )}
        />
      </div>
      <div className={styles.autocompleteWrapper}>
        <Controller
          control={control}
          rules={{ required: true }}
          name="destination"
          render={({ field: { onChange } }) => (
            <Autocomplete
              defaultValue={destination}
              loading={localitiesLoading}
              options={localities || []}
              id="destination"
              getOptionLabel={(option) => option.name}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              fullWidth
              clearOnEscape
              noOptionsText={noOptionsText}
              loadingText={loadingText}
              onOpen={handleOpen}
              onChange={(_, data) => {
                onChange(data?.id);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Куда"
                  placeholder="Куда"
                  variant="standard"
                />
              )}
            />
          )}
        />
      </div>
    </div>
  );
};
