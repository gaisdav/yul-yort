import { Chip } from "@mui/material";
import css from "./styles.module.scss";
import React from "react";
import { Link as RouterLink } from "react-router5";
import { ERouteNames } from "../../../../router/routes";

const LinkBehavior = React.forwardRef((props, ref) => {
  return (
    <RouterLink
      {...props}
      target="_blank"
      ref={ref}
      routeName={ERouteNames.ADD_AGENCY}
    />
  );
});

export const AddAgencyChip = () => {
  return (
    <Chip
      variant="outlined"
      component={LinkBehavior}
      clickable
      label="Добавить агентство"
      className={css.addAgencyChip}
    />
  );
};
