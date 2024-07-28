import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage/ProductViewPage";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="*" element={<Navigate replace to="/home" />} />

        <Route path="/home" Component={Home} />
        <Route path="/productlist" Component={ProductListingPage} />
        <Route path="/product/:id" Component={ProductViewPage} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
