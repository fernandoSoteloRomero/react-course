import { useRoutes } from "react-router-dom";
import Home from "../Home/Home";
import MyAccount from "../MyAccount/MyAccount";
import MyOrder from "../MyOrder/MyOrder";
import MyOrders from "../MyOrders/MyOrders";
import NotFound from "../NotFound/NotFound";
import SignIn from "../SignIn/SignIn";
import "./App.css";

function App() {
  return (
    <>
      <Home />
      <MyOrder />
      <MyOrders />
      <MyAccount />
      <SignIn />
      <NotFound />
    </>
  );
}

export default App;
