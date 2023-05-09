import CartProvider from "./context/CartProvider";
import Navbar from "./Components/Navbar/Navbar";
import DarkModeProvider from "./context/DarkModeProvider";
import Footer from "./Components/Partials/Footer";
import "./App.css";
import Navigation from "./router/Navigation";

const App = () => {
  return (
    <DarkModeProvider>
      <CartProvider>
        <Navigation>
          <Navbar />
        </Navigation>
        <Footer />
      </CartProvider>
    </DarkModeProvider>
  );
};

export default App;
