import { FC } from "react";
import { useRouter } from "react-router5";
import { SearchForm } from "../../components/SearchForm";
import { SubmitHandler } from "react-hook-form";
import { IFormData } from "../../components/SearchForm/types";
import css from "./styles.module.scss";
import { useViewModel } from "../../hooks/useViewModel";
import { ILocalityVM } from "../../../viewModels/Locality/types";
import { observer } from "mobx-react-lite";

const Home: FC = observer(() => {
  const { navigate } = useRouter();
  const localityVM = useViewModel<ILocalityVM>("locality");

  const handleSearch: SubmitHandler<IFormData> = (data) => {
    navigate("orders", data);
  };

  return (
    <div className={css.page}>
      <SearchForm
        localitiesLoading={localityVM.loading}
        onSearch={handleSearch}
        onGetLocalities={localityVM.getList}
        localities={localityVM.localities}
      />
    </div>
  );
});

export default Home;
