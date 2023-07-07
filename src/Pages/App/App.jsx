import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "../AppRoutes/AppRoutes";
import { Navbar } from "../../Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
