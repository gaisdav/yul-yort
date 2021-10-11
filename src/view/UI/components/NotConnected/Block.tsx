import { FC } from "react";
import { Alert } from "@mui/material";
import css from "./styles.module.scss";

export const Block: FC = () => {
  return (
    <div className={css.wrapper}>
      <Alert variant="filled" severity="error">
        Отсутствует соединение с интернетом!
      </Alert>
    </div>
  );
};
