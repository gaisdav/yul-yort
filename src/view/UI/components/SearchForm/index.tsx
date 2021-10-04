import { FC, useState } from "react";
import { ISearchForm } from "./types";
import { Form } from "./components/Form";
import { MinifiedForm } from "./components/MinifiedForm";

export const SearchForm: FC<ISearchForm> = (props) => {
  const [minified, setMinified] = useState(!!props.minified);

  const handleSetMinified = () => {
    setMinified(!minified);
  };

  if (minified) {
    return (
      <MinifiedForm
        origin={props.origin}
        className={props.className}
        destination={props.destination}
        onClick={handleSetMinified}
      />
    );
  }

  return (
    <Form
      minified={props.minified}
      origin={props.origin}
      className={props.className}
      destination={props.destination}
      onClick={handleSetMinified}
    />
  );
};
