import { FC } from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { IAppBar } from "./types";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import css from "./styles.module.scss";
import logo from "../../assets/logo.png";

export const Header: FC<IAppBar> = ({ theme, onSetTheme, onGoHome }) => {
  const handleChangeTheme = () => {
    onSetTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <AppBar>
      <Toolbar className={css.toolbar}>
        <IconButton onClick={onGoHome} className={css.logoButton}>
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
