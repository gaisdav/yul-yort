import { Chip, Link } from "@mui/material";
import css from "./styles.module.scss";
import React from "react";

export const AddAgencyChip = () => {
  return (
    <Chip
      variant="outlined"
      component={Link}
      target="_blank"
      clickable
      href="https://forms.gle/H3Rouwa1PQVj1Mru7"
      label="Добавить агентство"
      className={css.addAgencyChip}
    />
  );
};
