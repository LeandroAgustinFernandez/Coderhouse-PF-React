import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ItemsListContainer from "../pages/Products/ItemsListContainer";
import ItemDetailContainer from "../pages/ProductDetail/ItemDetailContainer";
import Cart from "../pages/Cart/Cart";
import CheckOut from "../pages/CheckOut/CheckOut";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const Navigation = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
