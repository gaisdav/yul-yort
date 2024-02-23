import { FC, PropsWithChildren } from "react";
import css from "./styles.module.scss";
import { Toolbar } from "@mui/material";

const Body: FC<PropsWithChildren> = ({ children }) => {

  return (
      <div className={css.bodyWrapper} >
        <Toolbar className={css.toolbar} />
        <div className={css.bodyWrapper}>{children}</div>
      </div>
  );
};

export default Body;
