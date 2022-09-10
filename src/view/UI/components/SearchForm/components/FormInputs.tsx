import { Autocomplete, TextField } from "@mui/material";
import { FC, useState } from "react";
import styles from "./styles//inputs.module.scss";
import { IFormInputs } from "./types";

export const FormInputs: FC<IFormInputs> = ({
  errors,
  register,
  clearErrors,
}) => {
  const noOptionsText = "Не найдено";
  const loadingText = "Загрузка...";
  const [originID, setOriginID] = useState("");
  const [destinationID, setDestinationID] = useState("");

  const handleOpen = async () => {
    // await getLocality();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.autocompleteWrapper}>
        <Autocomplete
          options={top100Films}
          id="origin"
          fullWidth
          noOptionsText={noOptionsText}
          loadingText={loadingText}
          getOptionLabel={(option) => option.title}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          clearOnEscape
          onOpen={handleOpen}
          onChange={(_, newValue) => {
            const id = newValue?.id || "";
            setOriginID(id);
          }}
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
          id="destination"
          noOptionsText={noOptionsText}
          loadingText={loadingText}
          getOptionLabel={(option) => option.title}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          fullWidth
          clearOnEscape
          onOpen={handleOpen}
          onChange={(_, newValue) => {
            const id = newValue?.id || "";
            setDestinationID(id);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              {...register("destination", {
                required: true,
                value: destinationID,
              })}
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
  { title: "The Shawshank Redemption", year: 1994, id: "1" },
  { title: "The Godfather", year: 1972, id: "2" },
  { title: "The Godfather: Part II", year: 1974, id: "3" },
  { title: "The Dark Knight", year: 2008, id: "4" },
  { title: "12 Angry Men", year: 1957, id: "5" },
  { title: "Schindler's List", year: 1993, id: "6" },
  { title: "Pulp Fiction", year: 1994, id: "7" },
];
