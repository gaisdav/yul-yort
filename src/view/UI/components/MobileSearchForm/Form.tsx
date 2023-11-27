import { FC, useState } from "react";
import css from "./styles.module.scss";

import { Button } from "@mui/material";
import SearchLocality from "./SearchLocality";

export const MobileForm: FC<any> = ({ localities, getList, loading }) => {
  const [isOpen, setOpen] = useState(false);
  const [from, setFrom] = useState<string | number>("");

  const openInputLayer = () => {
    setOpen(true);
  };

  const closeInputLayer = () => {
    setOpen(false);
  };

  const setLocation = (id: any) => {
    closeInputLayer();
    setFrom(id);
  };

  const searchLocality = (event: any) => {
    console.log("value", event.target.value);
    const value = event.target.value;
    getList(value);
  };

  return (
    <>
      <div>
        <div className={css.mobileContainer}>
          <div onClick={openInputLayer} className={css.from}>
            Откуда
          </div>
          <div className={css.to}>Куда</div>
        </div>
        <div className={css.button}>
          <Button fullWidth type="submit" variant="contained">
            Найти
          </Button>
        </div>
      </div>

      <SearchLocality
        from={from}
        localities={localities}
        isOpen={isOpen}
        closeInputLayer={closeInputLayer}
        setLocation={setLocation}
        searchLocality={searchLocality}
        loading={loading}
      />
    </>
  );
};
