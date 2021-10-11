import { FC, lazy, Suspense } from "react";
import { useRoute } from "react-router5";
import { constants } from "router5";

const HomePage = lazy(() => import("./pages/home"));
const OrdersPage = lazy(() => import("./pages/orders"));
const NotFoundPage = lazy(() => import("./pages/notFound"));

export const App: FC = () => {
  const router = useRoute();

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

  return <Suspense fallback={<div>Загрузка...</div>}>{page}</Suspense>;
};

export default App;
