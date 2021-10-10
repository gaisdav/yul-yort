import React, { FC } from "react";
import { SearchForm } from "../../components/SearchForm";
import { useRouteNode } from "react-router5";
import { useViewModel } from "../../hooks/useViewModel";
import { observer } from "mobx-react-lite";
import Error from "./components/Error";
import Loading from "./components/Loading/Loading";
import List from "./components/List/List";
import { SubmitHandler } from "react-hook-form";
import { IFormData } from "../../components/SearchForm/types";

const Orders: FC = observer(() => {
  const orderVM = useViewModel("order");
  const {
    route: { params },
    router: { navigate },
  } = useRouteNode("orders");

  const handleSearch: SubmitHandler<IFormData> = (data) => {
    navigate("orders", data);
  };

  return (
    <div>
      <SearchForm
        minified
        loading={orderVM.loading}
        destination={params.destination}
        origin={params.origin}
        onSearch={handleSearch}
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
