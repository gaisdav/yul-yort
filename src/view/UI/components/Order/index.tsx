import { FC } from "react";
import { Link, Paper, Typography } from "@mui/material";
import css from "./styles.module.scss";
import { IOrderProps } from "./types";

export const Order: FC<IOrderProps> = ({
  agencyName,
  phoneValue,
  priceValue,
}) => (
  <Paper elevation={3} className={css.order}>
    <div className={css.columnLeft}>
      <Typography variant="h6" align="left" className={css.orderTitle}>
        {agencyName}
      </Typography>
      <Link
        className={css.orderPhone}
        href={`tel:${phoneValue}`}
        underline="none"
        variant="subtitle2"
        align="left"
      >
        {phoneValue}
      </Link>
    </div>

    <div className={css.columnRight}>
      <Typography variant="h6">{priceValue}</Typography>
    </div>
  </Paper>
);
