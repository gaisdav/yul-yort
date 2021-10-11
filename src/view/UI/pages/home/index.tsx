import { FC } from "react";
import { useRouter } from "react-router5";
import { SearchForm } from "../../components/SearchForm";
import { SubmitHandler } from "react-hook-form";
import { IFormData } from "../../components/SearchForm/types";
import css from "./styles.module.scss";

const Home: FC = () => {
  const { navigate } = useRouter();

  const handleSearch: SubmitHandler<IFormData> = (data) => {
    navigate("orders", data);
  };

  return (
    <div className={css.page}>
      <SearchForm onSearch={handleSearch} />
    </div>
  );
};

export default Home;
