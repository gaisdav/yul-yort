import { FC, useState } from "react";
import { IFormData, ISearchForm } from "./types";
import { Form } from "./components/Form";
import { MinifiedForm } from "./components/MinifiedForm";
import { SubmitHandler } from "react-hook-form";
import { useAnalytics } from "../../hooks";

export const SearchForm: FC<ISearchForm> = ({
  loading = false,
  origin,
  destination,
  minified,
  className,
  onSearch,
  localities,
  localitiesLoading = false,
  gaCategory,
}) => {
  const [isMinified, setMinified] = useState(minified);
  const analytics = useAnalytics();

  const handleSetMinified = () => {
    analytics.click({
      label: isMinified ? "expand search form" : "minify search form",
      category: gaCategory,
    });
    setMinified(!isMinified);
  };

  const handleSearch: SubmitHandler<IFormData> = (args) => {
    analytics.click({
      label: "search click",
      category: gaCategory,
    });
    onSearch(args);
    minified && setMinified(true);
  };

  if (isMinified) {
    return (
      <MinifiedForm
        gaCategory={gaCategory}
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
      gaCategory={gaCategory}
      localitiesLoading={localitiesLoading}
      localities={localities}
      loading={loading}
      minified={minified}
      origin={origin}
      className={className}
      destination={destination}
      onSearch={handleSearch}
      onExpand={handleSetMinified}
    />
  );
};
