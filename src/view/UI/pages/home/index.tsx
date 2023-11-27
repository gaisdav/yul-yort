import { FC, useState } from "react";
import { useRouter } from "react-router5";
import { SearchForm } from "../../components/SearchForm";
import { SubmitHandler } from "react-hook-form";
import { IFormData } from "../../components/SearchForm/types";
import css from "./styles.module.scss";
import { useViewModel } from "../../hooks";
import { observer } from "mobx-react-lite";
import { AddAgencyChip } from "../../components/AddAgencyChip";
import { ECategories } from "../../../../libs";
import Example from "./Example";
import { Button } from "@mui/material";

const Home: FC = observer(() => {
  const { navigate } = useRouter();
  const localityVM = useViewModel("locality");
  const [isOpen, setOpen] = useState(false);

  const handleSearch: SubmitHandler<IFormData> = (data) => {
    navigate("orders", data);
  };

  const openInputLayer = () => {
    setOpen(true);
  };

  const closeInputLayer = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={css.page}>
        <div className={css.desktop}>
          <SearchForm
            gaCategory={ECategories.ORDERS}
            localitiesLoading={localityVM.loading}
            onSearch={handleSearch}
            localities={localityVM.localities}
          />
        </div>

        <div className={css.mobile}>
          <div className={css.mobileContainer}>
            <div onClick={openInputLayer} className={css.from}>
              Откуда
            </div>
            <div className={css.to}>Куда</div>
          </div>
          <Button type="submit" variant="contained">
            Найти
          </Button>
        </div>
      </div>
      <Example
        localities={localityVM.localities}
        isOpen={isOpen}
        closeInputLayer={closeInputLayer}
      />
      <AddAgencyChip />
    </>
  );
});

export default Home;
