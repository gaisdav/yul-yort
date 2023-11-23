import { FC } from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { IAppBar } from "./types";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import css from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import { useHeaderAnalytics } from "./useHeaderAnalytics";

export const Header: FC<IAppBar> = ({ theme, onSetTheme, onGoHome }) => {
  const { changeThemeEvent, goHomeEvent } = useHeaderAnalytics();

  const handleChangeTheme = () => {
    changeThemeEvent();
    onSetTheme(theme === "dark" ? "light" : "dark");
  };

  const handleGoHome = () => {
    goHomeEvent();
    onGoHome();
  };

  return (
    <AppBar>
      <Toolbar className={css.toolbar}>
        <IconButton onClick={handleGoHome} className={css.logoButton}>
          <img height={40} width={40} src={logo} alt="logo" />
        </IconButton>

        <IconButton onClick={handleChangeTheme}>
          {theme === "dark" ? (
            <LightModeRoundedIcon />
          ) : (
            <NightsStayRoundedIcon color="action" />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
