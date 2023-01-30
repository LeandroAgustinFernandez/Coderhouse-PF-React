import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import ItemsListContainer from "./Components/Items/ItemsListContainer";
import ItemDetailContainer from "./Components/Items/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import CheckOut from "./Components/Checkout/CheckOut";
import "./App.css";
import DarkModeProvider from "./context/DarkModeProvider";

const App = () => {
  return (
    <DarkModeProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ItemsListContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemsListContainer />}
            />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/*" element={<ItemsListContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </DarkModeProvider>
  );
};

export default App;
