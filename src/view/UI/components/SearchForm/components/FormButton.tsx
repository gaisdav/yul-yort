import Button from "@mui/material/Button";
import { FC } from "react";

import { IFormButton } from "./types";

export const FormButton: FC<IFormButton> = ({ loading }) => {
  return (
    <Button
      disabled={loading}
      fullWidth
      type="submit"
      variant="contained"
    >
      НАЙТИ
    </Button>
  );
};
