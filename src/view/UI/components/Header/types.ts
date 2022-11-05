import { TTheme } from "../../../viewModels/App/types";

export interface IAppBar {
  theme: TTheme;
  onSetTheme: (theme: TTheme) => void;
  onGoHome: () => void;
}
