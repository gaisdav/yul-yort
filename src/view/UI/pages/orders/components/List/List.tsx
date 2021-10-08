import { FC } from "react";
import { Order } from "../../../../components/Order";
import { Typography } from "@mui/material";
import { IListProps } from "./types";

const List: FC<IListProps> = ({ list }) => {
  if (!list.length) {
    return (
      <Typography variant="h6" align="center">
        По данному маршруту вариантов не найдено
      </Typography>
    );
  }

  return (
    <>
      {list.map((order) => (
        <Order
          key={order.id}
          agencyName={order.agencyName}
          phoneValues={order.phoneValues}
          priceValue={order.priceValue}
        />
      ))}
    </>
  );
};

export default List;
