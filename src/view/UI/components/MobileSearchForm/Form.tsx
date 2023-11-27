import { FC, useState } from "react";
import css from "./styles.module.scss";

import { Button } from "@mui/material";
import SearchLocality from "./SearchLocality";
import { ILocalityEntity } from "../../../../data/Locality";
import SearchLocalityTo from "./SearchLocalityTo";

export const MobileForm: FC<any> = ({
  localities,
  getList,
  loading,
  onSearch,
}) => {
  //FIXME: test
  const [isOpen, setOpen] = useState(false);
  const [isLocationTo, setIsLocationTo] = useState(false);
  //
  const [from, setFrom] = useState<ILocalityEntity | null>();
  const [to, setTo] = useState<ILocalityEntity | null>();

  //
  const openInputLayer = () => {
    setOpen(true);
  };

  const closeInputLayer = () => {
    setOpen(false);
  };
  //

  //
  const openLocationToLayer = () => {
    setIsLocationTo(true);
  };

  const closeLocationToLayer = () => {
    setIsLocationTo(false);
  };
  ///

  const setLocation = (locality: any) => {
    closeInputLayer();
    setFrom(locality);
  };

  const setLocationTo = (locality: any) => {
    closeLocationToLayer();
    setTo(locality);
  };

  const searchLocality = (event: any) => {
    const value = event.target.value;
    getList(value);
  };

  const handleSearch = () => {
    if (!from || !to) return;
    const data = {
      originId: from.id,
      destinationId: to.id,
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
          <div onClick={openLocationToLayer} className={css.to}>
            {to ? (
              <span className={css.formLocalityName}>{to.name}</span>
            ) : (
              <span>Куда</span>
            )}
          </div>
        </div>
        <div className={css.button}>
          <Button
            onClick={handleSearch}
            disabled={!from || !to}
            fullWidth
            type="submit"
            variant="contained"
          >
            Найти
          </Button>
        </div>
      </div>

      {/* FIXME: объединить  */}
      <SearchLocality
        from={from?.name}
        setLocation={setLocation}
        localities={localities}
        isOpen={isOpen}
        closeInputLayer={closeInputLayer}
        searchLocality={searchLocality}
        loading={loading}
      />
      <SearchLocalityTo
        from={to?.name}
        setLocation={setLocationTo}
        isOpen={isLocationTo}
        closeInputLayer={closeLocationToLayer}
        localities={localities}
        searchLocality={searchLocality}
        loading={loading}
      />
    </>
  );
};
