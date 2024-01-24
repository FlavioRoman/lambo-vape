// STYLE
import "./App.css";

// COMPONENTS
import Main from "./pages/Main";
import ListPage from "./pages/List";
import MenuPage from "./pages/Menu";
import LoginPage from "./pages/Login";
import AdminPage from "./pages/Admin";
import DistributorsPage from "./pages/Distributor";
import AuthenticationPage from "./pages/Authentication";

// REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/Contact";
import WholesalePage from "./pages/Wholesale";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/client" element={<ListPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/distributor" element={<DistributorsPage />} />
        <Route path="/authentication" element={<AuthenticationPage />} />
        <Route path="/wholesale" element={<WholesalePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
