import { FC, useState } from "react";
import css from "./styles.module.scss";

import { Button } from "@mui/material";
import SearchLocality from "./SearchLocality";
import { IFormData } from "../SearchForm/types";

export const MobileForm: FC<any> = ({
  localities,
  getList,
  loading,
  onSearch,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [from, setFrom] = useState<any>();

  const openInputLayer = () => {
    setOpen(true);
  };

  const closeInputLayer = () => {
    setOpen(false);
  };

  const setLocation = (locality: any) => {
    closeInputLayer();
    // const { id } = locality;
    setFrom(locality);
  };

  const searchLocality = (event: any) => {
    const value = event.target.value;
    getList(value);
  };

  const handleSearch = () => {
    const data = {
      originId: 1,
      destinationId: 3,
    };
    onSearch(data);
  };

  return (
    <>
      <div>
        <div className={css.mobileContainer}>
          <div onClick={openInputLayer} className={css.from}>
            {from ? (
              <span className={css.formLocalityName}>{from.name}</span>
            ) : (
              <span>Откуда</span>
            )}
          </div>
          <div className={css.to}>Куда</div>
        </div>
        <div className={css.button}>
          <Button
            onClick={handleSearch}
            disabled={!from}
            fullWidth
            type="submit"
            variant="contained"
          >
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
