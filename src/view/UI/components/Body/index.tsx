import { FC, useEffect, useState } from "react";
import classNames from "classnames";
import { Typography } from "@mui/material";
import css from "./styles.module.scss";

const Body: FC = ({ children }) => {
  const [offline, setOffline] = useState<boolean>(!navigator.onLine);

  useEffect(() => {
    const timerId = setInterval(() => {
      !navigator.onLine !== offline && setOffline(!navigator.onLine);
    }, 10000);

    return () => {
      clearInterval(timerId);
    };
  }, [offline]);

  const styles = classNames(css.bodyWrapper, {
    [`${css.notConnectionBody}`]: offline,
  });

  return (
    <div className={styles}>
      {offline && (
        <Typography className={css.errorText}>
          Отсутствует интернет соединение
        </Typography>
      )}

      <div className={css.body}>{children}</div>
    </div>
  );
};

export default Body;
