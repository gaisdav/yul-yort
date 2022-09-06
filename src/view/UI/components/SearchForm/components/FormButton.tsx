import Button from "@mui/material/Button";
import styles from "./styles/button.module.scss";

export const FormButton = () => {
  return (
    //   disabled={loading}

    <Button className={styles.button} type="submit" variant="contained">
      НАЙТИ
    </Button>
  );
};
