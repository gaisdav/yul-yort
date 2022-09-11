import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";
import { IFormInputs } from "./types";
import styles from "./styles//inputs.module.scss";

export const FormInputs: FC<IFormInputs> = ({ control }) => {
  const noOptionsText = "Не найдено";
  const loadingText = "Загрузка...";

  const handleOpen = async () => {
    // await getLocality();
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
            options={top100Films}
            id="origin"
            getOptionLabel={(option) => option.title}
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
            options={top100Films}
            id="destination"
            getOptionLabel={(option) => option.title}
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

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994, id: "1" },
  { title: "The Godfather", year: 1972, id: "2" },
  { title: "The Godfather: Part II", year: 1974, id: "3" },
  { title: "The Dark Knight", year: 2008, id: "4" },
  { title: "12 Angry Men", year: 1957, id: "5" },
  { title: "Schindler's List", year: 1993, id: "6" },
  { title: "Pulp Fiction", year: 1994, id: "7" },
];
