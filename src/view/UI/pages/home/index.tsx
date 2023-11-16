import { FC } from "react";
import { useRouter } from "react-router5";
import { SearchForm } from "../../components/SearchForm";
import { SubmitHandler } from "react-hook-form";
import { IFormData } from "../../components/SearchForm/types";
import css from "./styles.module.scss";
import { useViewModel } from "../../hooks";
import { observer } from "mobx-react-lite";
import { AddAgencyChip } from "../../components/AddAgencyChip";
import { ECategories } from "../../../../libs";

const Home: FC = observer(() => {
  const { navigate } = useRouter();
  const localityVM = useViewModel("locality");

  const handleSearch: SubmitHandler<IFormData> = (data) => {
    navigate("orders", data);
  };

  return (
    <>
      <div className={css.page}>
        <SearchForm
          gaCategory={ECategories.ORDERS}
          localitiesLoading={localityVM.loading}
          onSearch={handleSearch}
          localities={localityVM.localities}
        />
      </div>

      <AddAgencyChip />
    </>
  );
});

export default Home;
