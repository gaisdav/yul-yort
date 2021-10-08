import { FC } from "react";
import { SearchForm } from "../../components/SearchForm";
import { useRouter } from "react-router5";

const Home: FC = () => {
  const { navigate } = useRouter();

  const handleSearch = () => {
    navigate("orders", {
      destination: "destination",
      origin: "origin",
    });
  };

  return <SearchForm onSearch={handleSearch} />;
};

export default Home;
