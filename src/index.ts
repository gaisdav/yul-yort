import createAppRouter from "./router";
import { viewModels } from "./store";
import { initApp } from "./view/UI";
import { lightTheme, darkTheme } from "./view/UI/theme";
import { initErrorApp } from "./view/UI/initErrorApp";
import routes from "./router/routes";

try {
  const router = createAppRouter({ store: viewModels, routes });

  router.start();

  initApp({
    router,
    themes: [lightTheme, darkTheme],
  });
} catch (err) {
  initErrorApp(err);
}
