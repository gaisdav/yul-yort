import { FC } from "react";
import css from "./styles.module.scss";
import { useViewModel } from "../../hooks";
import { Toolbar } from "@mui/material";

const Body: FC = ({ children }) => {
  const appVM = useViewModel("app");

  return (
    <>
      <div className={css.bodyWrapper} data-theme={appVM.theme}>
        <Toolbar className={css.toolbar} />
        <div className={css.bodyWrapper}>{children}</div>
      </div>
    </>
  );
};

export default Body;
