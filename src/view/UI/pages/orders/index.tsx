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
import css from "./styles.module.scss";
import { IOrderVM } from "../../../viewModels/Order/types";
import { ILocalityVM } from "../../../viewModels/Locality/types";

const Orders: FC = observer(() => {
  const orderVM = useViewModel<IOrderVM>("order");
  const localityVM = useViewModel<ILocalityVM>("locality");
  const {
    route: { params },
    router: { navigate },
  } = useRouteNode("orders");

  const handleSearch: SubmitHandler<IFormData> = (data) => {
    navigate("orders", data);
  };

  const originEntity = localityVM.localities?.find(
    (item) => item.id === params.origin
  );

  const destinationEntity = localityVM.localities?.find(
    (item) => item.id === params.destination
  );

  return (
    <div className={css.page}>
      <div className={css.searchForm}>
        <SearchForm
          minified
          localities={localityVM.localities}
          loading={orderVM.loading || localityVM.loading}
          localitiesLoading={localityVM.loading}
          destination={destinationEntity}
          origin={originEntity}
          onSearch={handleSearch}
        />
      </div>

      <div className={css.list}>
        {orderVM.loading && <Loading />}

        {orderVM.error && <Error error={orderVM.error} />}

        {!orderVM.error && !orderVM.loading && orderVM.orderList && (
          <List list={orderVM.orderList} />
        )}
      </div>
    </div>
  );
});

export default Orders;
