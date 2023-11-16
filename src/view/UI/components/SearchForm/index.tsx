import { FC, useRef, useState } from "react";
import { IFormData, ISearchForm } from "./types";
import { Form } from "./components/Form";
import { MinifiedForm } from "./components/MinifiedForm";
import { SubmitHandler } from "react-hook-form";
import { useViewModel } from "../../hooks/useViewModel";
import debounce from "debounce";

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

  const test = () => {
    localityVM.getList("");
  };
   
  const clearDebounceInstance = () => {
    if (debounceInstance.current) {
      debounceInstance.current.clear();
    }
  }
  const handleLocalitiesSearch = () => {
    localityVM.setLoading();
    clearDebounceInstance()

    debounceInstance.current = debounce(test, 1000);

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
    />
  );
};
