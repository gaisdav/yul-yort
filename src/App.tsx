import React from "react";
import "./App.css";
import Form from "./presentation/ui/Form";
import { observer } from "mobx-react-lite";

function App() {
  return <Form />;
}

export default observer(App);
