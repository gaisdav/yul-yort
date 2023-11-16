import { Chip, Link } from "@mui/material";
import css from "./styles.module.scss";
import React from "react";
import { useAnalytics } from "../../hooks";
import { ECategories } from "../../../../libs";

export const AddAgencyChip = () => {
  const analytics = useAnalytics();

  const handleClick = () => {
    analytics.click({
      category: ECategories.ORDERS,
      label: "add agency click",
    });
  };

  return (
    <Chip
      variant="outlined"
      component={Link}
      target="_blank"
      clickable
      onClick={handleClick}
      href="https://forms.gle/H3Rouwa1PQVj1Mru7"
      label="Добавить агентство"
      className={css.addAgencyChip}
    />
  );
};
