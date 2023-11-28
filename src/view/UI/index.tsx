import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router5";
import AppRoot from "./AppRoot.tsx";
import { IAppInitConfig } from "./types.ts";

export const initApp = ({ router, themes }: IAppInitConfig) => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    /* @ts-expect-error TODO */
    <RouterProvider router={router}>
      <AppRoot themes={themes} />
    </RouterProvider>,
  );
};
