import { FC, useRef, useState } from "react";
import { IFormData, ISearchForm } from "./types";
import { Form } from "./components/Form";
import { MinifiedForm } from "./components/MinifiedForm";
import { SubmitHandler } from "react-hook-form";
import { useViewModel } from "../../hooks/useViewModel";
import debounce from "debounce";

const delayGetLocalities: number = 500
export const SearchForm: FC<ISearchForm> = ({
  loading = false,
  origin,
  destination,
  minified,
  className,
  onSearch,
  localities,
  localitiesLoading = false,
}) => {
  const localityVM = useViewModel("locality");
  const debounceInstance = useRef<any>(null);

  //Функция для запроса locality по search
  const getLocalities = (search?: string) => {
    localityVM.getList(search);
  };

  //Очистка таймера
  const clearDebounceInstance = () => {
    if (debounceInstance.current) {
      debounceInstance.current.clear();
    }
  };

  //Инициализация функции запроса
  const handleLocalitiesSearch = (search?: string) => {
    localityVM.setLoading();
    clearDebounceInstance();

    debounceInstance.current = debounce(() => getLocalities(search), delayGetLocalities);


    debounceInstance.current();
  };

  const [isMinified, setMinified] = useState(minified);

  const handleSetMinified = () => {
    setMinified(!isMinified);
  };

  const handleSearch: SubmitHandler<IFormData> = (args) => {
    onSearch(args);
    minified && setMinified(true);
  };

  if (isMinified) {
    return (
      <MinifiedForm
        loading={loading}
        className={className}
        origin={origin}
        destination={destination}
        onExpand={handleSetMinified}
      />
    );
  }

  return (
    <Form
      localitiesLoading={localitiesLoading}
      localities={localities}
      loading={loading}
      minified={minified}
      origin={origin}
      className={className}
      destination={destination}
      onSearch={handleSearch}
      onExpand={handleSetMinified}
      handleLocalitiesSearch={handleLocalitiesSearch}
      clearDebounceInstance={clearDebounceInstance}
      getLocalities={getLocalities}
    />
  );
};
