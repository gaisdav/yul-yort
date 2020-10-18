import React, { useContext } from "react";
import Form from "./Form";
import { observer } from "mobx-react-lite";
import Result from "./result";
import { StoreContext } from "../../index";

function App() {
  const { formVM } = useContext(StoreContext);

  if (formVM.response) {
    return <Result />;
  }

  return <Form />;
}

export default observer(App);
