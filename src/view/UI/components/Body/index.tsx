import { FC } from "react";
import css from "./styles.module.scss";
import { useViewModel } from "../../hooks/useViewModel";
import { IAppVM } from "../../../viewModels/App/types";

const Body: FC = ({ children }) => {
  const appVM = useViewModel<IAppVM>("app");

  return (
    <div className={css.body} data-theme={appVM.theme}>
      {children}
    </div>
  );
};

export default Body;
