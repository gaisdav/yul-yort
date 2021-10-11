import { FC } from "react";
import { IInitErrorPageProps } from "./types";
import { Typography } from "@mui/material";
import css from "./styles.module.scss";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";

const InitError: FC<IInitErrorPageProps> = ({ error }) => {
  return (
    <div className={css.page}>
      <Typography align="center" className={css.icon} color="error.main">
        <SentimentVeryDissatisfiedOutlinedIcon fontSize="inherit" />
      </Typography>

      <Typography variant="h6" align="center" color="error.main">
        Произошла ошибка при инициализации приложения
      </Typography>

      <div>
        <Typography align="center" color="error.main">
          {error.name}
        </Typography>
        <Typography align="center" color="error.main">
          {error.message}
        </Typography>
      </div>
    </div>
  );
};

export default InitError;
