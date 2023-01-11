import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./Components/Items/ItemDetailContainer";
import ItemsListContainer from "./Components/Items/ItemsListContainer";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemsListContainer greetings="Bienvenido a Libre Mercado!" />
            }
          />
          <Route
            path="/category/:categoryName"
            element={
              <ItemsListContainer greetings="Bienvenido a Libre Mercado!" />
            }
          />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
