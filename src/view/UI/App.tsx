import React from "react";
import "./App.css";
import { SearchForm } from "./components/SearchForm";
import { Order } from "./components/Order";

function App() {
  return (
    <div className="App">
      <SearchForm minified origin="Уфа" destination="Нефтекамск" />
      <>
        <Order
          agencyName="asdfafs"
          phoneValue="+7 0000000000"
          priceValue="2000 P"
        />
        <Order
          agencyName="asdfafs"
          phoneValue="+7 0000000000"
          priceValue="2000 P"
        />
        <Order
          agencyName="asdfafs"
          phoneValue="+7 0000000000"
          priceValue="2000 P"
        />
        <Order
          agencyName="asdfafs"
          phoneValue="+7 0000000000"
          priceValue="2000 P"
        />
        <Order
          agencyName="asdfafs"
          phoneValue="+7 0000000000"
          priceValue="2000 P"
        />
        <Order
          agencyName="asdfafsa sdf asf a sdf asdf a sdf asd f as"
          phoneValue="+7 0000000000"
          priceValue="2000 P"
        />
        <Order
          agencyName="asdfafsaasdfasdfsfdsdfasdfasdfasdfasdfasdfasdfads"
          phoneValue="+7 0000000000"
          priceValue="200000 P"
        />
        <Order
          agencyName="asdfafs"
          phoneValue="+7 0000000000"
          priceValue="2000 P"
        />
        <Order
          agencyName="asdfafs"
          phoneValue="+7 0000000000"
          priceValue="2000 P"
        />
        <Order
          agencyName="asdfafs"
          phoneValue="+7 0000000000"
          priceValue="2000 P"
        />
      </>
    </div>
  );
}

export default App;
