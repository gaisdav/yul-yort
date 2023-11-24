import { FC, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { RouterProvider, useRouter } from "react-router5";
import { Router } from "router5/dist/types/router";
import { IDependencies } from "../../router/types";
import { Theme } from "@mui/material/styles/createTheme";
import Body from "./components/Body";
import { ErrorBoundary } from "./pages/errorBoundaryPage";
import { useViewModel, useChangeStatusBar } from "./hooks";
import { observer } from "mobx-react-lite";
import { Header } from "./components/Header";
import { ERouteNames } from "../../router/routes";

type IAppInitConfig = {
  router: Router<IDependencies>;
  themes: [lightTheme: Theme, darkTheme: Theme];
};

const AppRoot: FC<{ themes: IAppInitConfig["themes"] }> = observer(
  ({ themes }) => {
    const [lightTheme, darkTheme] = themes;
    const { navigate } = useRouter();
    const appVM = useViewModel("app");
    useChangeStatusBar({
      mode: appVM.theme,
    });

    const handleGoHome = () => {
      navigate(ERouteNames.HOME);
    };

    return (
      <StrictMode>
        <ThemeProvider theme={appVM.theme === "light" ? lightTheme : darkTheme}>
          <CssBaseline />
          <StyledEngineProvider injectFirst>
            <ErrorBoundary>
              <Header
                theme={appVM.theme}
                onSetTheme={appVM.setTheme}
                onGoHome={handleGoHome}
              />
              <Body>
                <App />
              </Body>
            </ErrorBoundary>
          </StyledEngineProvider>
        </ThemeProvider>
      </StrictMode>
    );
  },
);

export const initApp = ({ router, themes }: IAppInitConfig) => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    /* @ts-expect-error TODO */
    <RouterProvider router={router}>
      <AppRoot themes={themes} />
    </RouterProvider>,
  );
};
