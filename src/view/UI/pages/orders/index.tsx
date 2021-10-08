import React, { FC } from "react";
import { SearchForm } from "../../components/SearchForm";
import { useRouteNode } from "react-router5";
import { useViewModel } from "../../hooks/useViewModel";
import { observer } from "mobx-react-lite";
import Error from "./components/Error";
import Loading from "./components/Loading/Loading";
import List from "./components/List/List";

const Orders: FC = observer(() => {
  const orderVM = useViewModel("order");
  const { params } = useRouteNode("orders").route;

  return (
    <div>
      <SearchForm
        minified
        destination={params.destination}
        origin={params.origin}
      />

      {orderVM.loading && <Loading />}

      {orderVM.error && <Error error={orderVM.error} />}

      {!orderVM.error && !orderVM.loading && orderVM.orderList && (
        <List list={orderVM.orderList} />
      )}
    </div>
  );
});

export default Orders;
