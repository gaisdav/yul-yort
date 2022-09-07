import Button from "@mui/material/Button";
import { FC } from "react";
import styles from "./styles/button.module.scss";
import { iFormButton } from "./types";

export const FormButton: FC<iFormButton> = ({ loading }) => {
  return (
    <Button
      disabled={loading}
      className={styles.button}
      type="submit"
      variant="contained"
    >
      НАЙТИ
    </Button>
  );
};
