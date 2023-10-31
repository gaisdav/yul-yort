import { FC, StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "../../reportWebVitals";
import * as serviceWorkerRegistration from "../../serviceWorkerRegistration";
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
import { useViewModel } from "./hooks/useViewModel";
import { observer } from "mobx-react-lite";
import { Header } from "./components/Header";
import { ERouteNames } from "../../router/routes";

type IAppInitConfig = {
  router: Router<IDependencies>;
  themes: [lightTheme: Theme, darkTheme: Theme];
};

const AppRoot: FC<{ themes: IAppInitConfig["themes"] }> = observer(
  ({ themes: [lightTheme, darkTheme] }) => {
    const appVM = useViewModel("app");
    const { navigate } = useRouter();

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
  }
);

export const initApp = ({ router, themes }: IAppInitConfig) => {
  ReactDOM.render(
    /* @ts-ignore TODO */
    <RouterProvider router={router}>
      <AppRoot themes={themes} />
    </RouterProvider>,
    document.getElementById("root")
  );
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
