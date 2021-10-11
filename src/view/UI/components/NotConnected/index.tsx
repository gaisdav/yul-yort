import { FC, useEffect, useState } from "react";
import { Paper } from "@mui/material";
import css from "./styles.module.scss";

export const NotConnected: FC = () => {
  const [online, setOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const timerId = setInterval(() => {
      navigator.onLine !== online && setOnline(navigator.onLine);
    }, 10000);

    return () => {
      clearInterval(timerId);
    };
  }, [online]);

  if (online) {
    return null;
  }

  return (
    <div className={css.wrapper}>
      <Paper
        elevation={0}
        className={css.paper}
        sx={{
          color: "primary.contrastText",
          bgcolor: "error.light",
        }}
      >
        Отсутствует соединение с интернетом
      </Paper>
    </div>
  );
};
