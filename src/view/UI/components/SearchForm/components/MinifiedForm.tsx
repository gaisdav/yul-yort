import { FC } from "react";
import { IForm } from "../types";
import css from "../styles.module.scss";
import { Button, Paper, Typography } from "@mui/material";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

export const MinifiedForm: FC<IForm> = ({
  origin,
  destination,
  onExpand,
  className = "",
}) => {
  return (
    <Paper elevation={3} className={`${css.minifiedRouteWrapper} ${className}`}>
      {!origin || !destination ? (
        <Typography variant="h6" className={css.title}>
          Маршрут не указан
        </Typography>
      ) : (
        <>
          <Typography variant="h6" className={css.title} align="center">
            {origin}
          </Typography>

          <ArrowRightAltOutlinedIcon className={css.icon} />

          <Typography variant="h6" className={css.title} align="center">
            {destination}
          </Typography>
        </>
      )}

      <Button
        onClick={onExpand}
        className={css.formButton}
        color="primary"
        variant="outlined"
        size="large"
      >
        Изменить
      </Button>
    </Paper>
  );
};
