import React from "react";
import "./App.css";
import { SearchForm } from "./components/SearchForm";
import { Order } from "./components/Order";
import { OrderSkeleton } from "./components/Order/OrderSkeleton";

function App() {
  return (
    <div className="App">
      <SearchForm minified origin="УфаУфаУф" destination="Нефтекамск" />
      <>
        <Order
          agencyName="asdfafsasdfafs asdfafsasdfafsasdfafs"
          phoneValues={[]}
        />
        <OrderSkeleton />
        <Order agencyName="asdfafs" priceValue="2000 ₽" />
        <Order
          agencyName="asdfafs"
          phoneValues={[
            "+7 0000000000",
            "+7 0000650000",
            "+7 0002000000",
            "+7 00000098000",
          ]}
          priceValue="2000 ₽"
        />
        <Order
          agencyName="asdfafs"
          phoneValues={["+7 0000000000"]}
          priceValue="2000 ₽"
        />
        <Order
          agencyName="asdfafs"
          phoneValues={["+7 0000000000"]}
          priceValue="2000 ₽"
        />
        <Order
          agencyName="asdfafsa sdf asf a sdf asdf a sdf asd f as"
          phoneValues={["+7 0000000000"]}
          priceValue="2000 ₽"
        />
        <Order
          agencyName="asdfafsaasdfasdfsfdsdfasdfasdfasdfasdfasdfasdfads"
          phoneValues={["+7 0000000000"]}
          priceValue="200000 ₽"
        />
        <Order
          agencyName="asdfafs"
          phoneValues={["+7 0000000000"]}
          priceValue="2000 ₽"
        />
        <Order
          agencyName="asdfafs"
          phoneValues={["+7 0000000000"]}
          priceValue="2000 ₽"
        />
        <Order
          agencyName="asdfafs"
          phoneValues={["+7 0000000000", "+7 00000098000"]}
          priceValue="2000 ₽"
        />
      </>
    </div>
  );
}

export default App;
