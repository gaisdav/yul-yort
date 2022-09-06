import { useState } from "react";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ru } from "date-fns/locale";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";

export const DatePicker = () => {
  const [valueTime, setValueTime] = useState(new Date());

  const handleChange = (newValue: any | null) => {
    setValueTime(newValue);
  };

  return (
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
  );
};
