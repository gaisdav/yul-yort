import { Autocomplete, TextField } from "@mui/material";
import { FC, HTMLAttributes } from "react";
import styles from "./styles//inputs.module.scss";
import { IFormInputs } from "./types";

export const FormInputs: FC<IFormInputs> = ({ errors, register }) => {
  
  const noOptionsText = "Не найдено";
  const loadingText = "Загрузка...";

  const handleOpen = async () => {
    // await getLocality();
  }

  const renderOption = (
    props: HTMLAttributes<HTMLLIElement>,
    option: FilmOptionType
  ) => (
    <li {...props} key={option.id}>
      {option.name}
    </li>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.autocompleteWrapper}>
        <Autocomplete
          options={top100Films}
          renderOption={renderOption}
          id="origin"
          fullWidth
          noOptionsText={noOptionsText}
          loadingText={loadingText}
          getOptionLabel={(option) => option.name}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          clearOnEscape
          onOpen={handleOpen}
          renderInput={(params) => (
            <TextField
              {...register("origin", {
                required: true,
              })}
              {...params}
              autoFocus
              label="Откуда"
              placeholder="Откуда"
              variant="standard"
            />
          )}
        />
      </div>
      <div className={styles.autocompleteWrapper}>
        <Autocomplete
          options={top100Films}
          renderOption={renderOption}
          id="destination"
          noOptionsText={noOptionsText}
          loadingText={loadingText}
          getOptionLabel={(option) => option.name}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          fullWidth
          clearOnEscape
          onOpen={handleOpen}
          renderInput={(params) => (
            <TextField
              {...register("destination", {
                required: true,
              })}
              {...params}
              label="Куда"
              placeholder="Куда"
              variant="standard"
            />
          )}
        />
      </div>
    </div>
  );
};

//TEST
const top100Films = [
  { name: "The Shawshank Redemption", year: 1994, id: '1' },
  { name: "The Godfather", year: 1972, id: '2' },
  { name: "The Godfather: Part II", year: 1974, id: '3' },
  { name: "The Dark Knight", year: 2008, id: '4' },
  { name: "12 Angry Men", year: 1957, id: '5' },
  { name: "Schindler's List", year: 1993, id: '6' },
  { name: "Pulp Fiction", year: 1994,id: '7' },
];

interface FilmOptionType {
  id: string;
  name: string;
  year: number;
}
