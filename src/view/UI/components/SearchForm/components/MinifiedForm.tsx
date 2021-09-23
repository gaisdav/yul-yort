import { FC } from "react";
import { IForm } from "../types";
import styles from "../styles.module.scss";
import { Button, Typography } from "@mui/material";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

export const MinifiedForm: FC<IForm> = ({ origin, destination, onClick }) => {
  return (
    <div className={styles.minifiedRouteWrapper}>
      {!origin || !destination ? (
        <Typography variant="h6">Маршрут не указан</Typography>
      ) : (
        <>
          <Typography variant="h6">{origin}</Typography>

          <ArrowRightAltOutlinedIcon />

          <Typography variant="h6">{destination}</Typography>
        </>
      )}

      <Button
        onClick={onClick}
        className={styles.minifiedRouteButton}
        color="primary"
        variant="outlined"
      >
        Изменить
      </Button>
    </div>
  );
};
