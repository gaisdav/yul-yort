import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";
import styles from "./styles//inputs.module.scss";
import { IFormInputs } from "./types";

export const FormInputs: FC<IFormInputs> = ({ errors }) => {
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option: FilmOptionType) => option.title,
  };


  return (
    <div className={styles.wrapper}>
      <div className={styles.autocompleteWrapper}>
        <Autocomplete
          {...defaultProps}
          id="origin"
          sx={{ width: "100%" }}
          clearOnEscape
          renderInput={(params) => (
            <TextField {...params} label="Откуда" variant="standard" />
          )}
        />
      </div>
      <div className={styles.autocompleteWrapper}>
        <Autocomplete
          {...defaultProps}
          id="destination"
          sx={{ width: "100%" }}
          clearOnEscape
          renderInput={(params) => (
            <TextField {...params} label="Куда" variant="standard" />
          )}
        />
      </div>
    </div>
  );
};

//TEST
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

interface FilmOptionType {
  title: string;
  year: number;
}
