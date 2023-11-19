import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "../AppRoutes/AppRoutes";
import { Navbar } from "../../Components/Navbar/Navbar";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu/CheckoutSideMenu";
import { ShoppingCartProvider } from "../../Context/Context";

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
