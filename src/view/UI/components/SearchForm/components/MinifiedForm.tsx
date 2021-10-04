import { FC } from "react";
import { IForm } from "../types";
import styles from "../styles.module.scss";
import { Button, Paper, Typography } from "@mui/material";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

export const MinifiedForm: FC<IForm> = ({
  origin,
  destination,
  onClick,
  className = "",
}) => {
  return (
    <Paper
      elevation={3}
      className={`${styles.minifiedRouteWrapper} ${className}`}
    >
      {!origin || !destination ? (
        <Typography variant="h6">Маршрут не указан</Typography>
      ) : (
        <>
          <Typography variant="h6" className={styles.title} align="center">
            {origin}
          </Typography>

          <ArrowRightAltOutlinedIcon />

          <Typography variant="h6" className={styles.title} align="center">
            {destination}
          </Typography>
        </>
      )}

      <Button
        onClick={onClick}
        className={styles.minifiedRouteButton}
        color="primary"
        variant="outlined"
        size="large"
      >
        Изменить
      </Button>
    </Paper>
  );
};
