import { FC, useEffect, useState } from "react";
import {
  Autocomplete,
  Paper,
  TextField,
} from "@mui/material";
import dayjs, { Dayjs } from 'dayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {ru} from 'date-fns/locale'
import Stack from '@mui/material/Stack';


import { useForm } from "react-hook-form";
import { IForm, IFormData } from "../types";
import styles from "../styles.module.scss";

import { Point } from "./Point";

export const Form: FC<IForm> = ({
  loading,
  origin = "",
  destination = "",
  onSearch,
  onExpand,
  minified = false,
  className = "",
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<IFormData>();

  useEffect(() => {
    if (origin) {
      setValue("origin", origin);
    }
    if (destination) {
      setValue("destination", destination);
    }
  }, [setValue, origin, destination]);

  const handleChangeRoute = () => {
    const originValue = getValues("origin");
    const destinationValue = getValues("destination");

    setValue("origin", destinationValue);
    setValue("destination", originValue);
  };

  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option: FilmOptionType) => option.title,
  };
  const [valueTime, setValueTime] = useState(new Date())
  

  const handleChange = (newValue: any | null) => {
    setValueTime(newValue)
  };

  return (
    <>
    <Paper elevation={3} className={`${styles.formWrapper} ${className}`}>
      <Point/>
      <form onSubmit={handleSubmit(onSearch)} className={styles.wrapper}>
        <div className={styles.autocompleteWrapper}>
        <Autocomplete
          {...defaultProps}
          id="clear-on-escape"
          sx={{ width: '100%' }}
          clearOnEscape
          renderInput={(params) => (
            <TextField {...params} label="Откуда" variant="standard" />
          )}
        />

        </div>
        <div className={styles.autocompleteWrapper}>
          <Autocomplete
            {...defaultProps}
            id="clear-on-escape"
            sx={{ width: '100%' }}
            clearOnEscape
            renderInput={(params) => (
              <TextField {...params} label="Куда" variant="standard" />
            )}
          />
        </div>
      </form>

      
    </Paper>
    <LocalizationProvider locale={ru} dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <MobileDatePicker
          label="Date mobile"
          inputFormat="dd-MMMM-yyyy"
          value={valueTime}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
    </>
  );
};

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
]

interface FilmOptionType {
  title: string;
  year: number;
}