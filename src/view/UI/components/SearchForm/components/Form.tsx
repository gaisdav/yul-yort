import { Button, Paper, TextField } from "@mui/material";
import { FC } from "react";
import { IForm } from "../types";
import styles from "../styles.module.scss";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";

export const Form: FC<IForm> = ({
  origin = "",
  destination = "",
  onSearch,
  onExpand,
  minified,
  className = "",
}) => {
  return (
    <Paper elevation={3} className={`${styles.wrapper} ${className}`}>
      <TextField
        defaultValue={origin}
        className={styles.input}
        name="origin-input"
        id="origin-input"
        label="Откуда"
        placeholder="Откуда"
        variant="outlined"
        autoFocus
        size="small"
        type="search"
      />

      <TextField
        defaultValue={destination}
        className={styles.input}
        id="destination-input"
        name="destination-input"
        label="Куда"
        placeholder="Куда"
        variant="outlined"
        size="small"
        type="search"
      />

      <div>
        <Button
          color="primary"
          variant="contained"
          size="large"
          className={styles.formButton}
          onClick={onSearch}
        >
          Найти
        </Button>

        {minified && (
          <Button
            startIcon={
              <KeyboardArrowLeftOutlinedIcon
                className={styles.rollUpButtonIcon}
              />
            }
            size="large"
            color="primary"
            variant="text"
            onClick={onExpand}
            className={styles.formButton}
          >
            Свернуть
          </Button>
        )}
      </div>
    </Paper>
  );
};
