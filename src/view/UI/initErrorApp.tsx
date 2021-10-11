import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { CssBaseline, Typography } from "@mui/material";

// TODO типизация ошибки
export const initErrorApp = (error: any) => {
  ReactDOM.render(
    <StrictMode>
      <CssBaseline />
      <div>
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
    </StrictMode>,
    document.getElementById("root")
  );
};
