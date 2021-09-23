import React from "react";
import "./App.css";
import { SearchForm } from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <SearchForm minified origin="Уфа" destination="Нефтекамск" />
    </div>
  );
}

export default App;
