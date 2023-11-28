import React, { FC, useState } from "react";
import css from "./styles.module.scss";

import { Button, Paper } from "@mui/material";
import SearchLocality from "./SearchLocality";
import { ILocalityEntity } from "../../../../data/Locality";

interface MobileFormProps {
  localities: ILocalityEntity[] | null;
  getList: (value: string) => void;
  loading: boolean;
  onSearch: (data: { originId: string; destinationId: string }) => void;
}

const MobileForm: FC<MobileFormProps> = ({
  localities = [],
  getList,
  loading,
  onSearch,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [isLocationTo, setIsLocationTo] = useState(false);
  const [from, setFrom] = useState<ILocalityEntity | null>();
  const [to, setTo] = useState<ILocalityEntity | null>();

  //TODO: поиск маршрута
  const handleSearch = () => {
    if (!from || !to) return;
    const data: any = {
      originId: from.id,
      destinationId: to.id,
    };
    onSearch(data);
  };

  //TODO: отвечает за открытие и за закрытие слоя 
  const toggleLocationLayer = (type: "from" | "to") => {
    if (type === "from") {
      setOpen(!isOpen);
    } else {
      setIsLocationTo(!isLocationTo);
    }
  };

  //TODO: устанавливаем состояние
  const setLocation = (locality: any, type: "from" | "to") => {
    toggleLocationLayer(type);
    if (type === "from") {
      setFrom(locality);
    } else {
      setTo(locality);
    }
  };

  //TODO: поиск города
  const searchLocality = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    getList(value);
  };

  return (
    <>
      <Paper elevation={3}>
        <div className={css.mobileContainer}>
          <div onClick={() => toggleLocationLayer("from")} className={css.from}>
            {from ? (
              <span className={css.formLocalityName}>{from.name}</span>
            ) : (
              <span>Откуда</span>
            )}
          </div>
          <div onClick={() => toggleLocationLayer("to")} className={css.to}>
            {to ? (
              <span className={css.formLocalityName}>{to.name}</span>
            ) : (
              <span>Куда</span>
            )}
          </div>
        </div>
      </Paper>

      <div className={css.button}>
        <Button
          onClick={handleSearch}
          fullWidth
          type="submit"
          variant="contained"
          size="large"
        >
          Найти
        </Button>
      </div>

      <SearchLocality
        label="Откуда"
        from={from?.name}
        setLocation={(locality) => setLocation(locality, "from")}
        localities={localities}
        isOpen={isOpen}
        closeInputLayer={() => toggleLocationLayer("from")}
        searchLocality={searchLocality}
        loading={loading}
      />

      <SearchLocality
        label="Куда"
        from={to?.name}
        setLocation={(locality) => setLocation(locality, "to")}
        isOpen={isLocationTo}
        closeInputLayer={() => toggleLocationLayer("to")}
        localities={localities}
        searchLocality={searchLocality}
        loading={loading}
      />
    </>
  );
};

export { MobileForm };
