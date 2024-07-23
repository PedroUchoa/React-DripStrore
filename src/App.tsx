import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/productlist"  Component={ProductListingPage}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
