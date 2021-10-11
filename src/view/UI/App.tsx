import { FC, lazy, Suspense, useEffect, useState } from "react";
import { useRoute } from "react-router5";
import { constants } from "router5";
import { LoadingScreen } from "./components/LoadingScreen";

const HomePage = lazy(() => import("./pages/home"));
const OrdersPage = lazy(() => import("./pages/orders"));
const NotFoundPage = lazy(() => import("./pages/notFound"));

export const App: FC = () => {
  const router = useRoute();
  const [online, setOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const timerId = setInterval(() => {
      navigator.onLine !== online && setOnline(navigator.onLine);
    }, 10000);

    return () => {
      clearInterval(timerId);
    };
  }, [online]);

  let page: JSX.Element;

  switch (router.route.name) {
    case "home":
      page = <HomePage />;
      break;

    case "orders":
      page = <OrdersPage />;
      break;

    case constants.UNKNOWN_ROUTE:
    default:
      page = <NotFoundPage />;
  }

  return (
    <Suspense fallback={<LoadingScreen />}>
      <div>{!online && "Отсутствует соединение с интернетом"}</div>
      {page}
    </Suspense>
  );
};

export default App;
