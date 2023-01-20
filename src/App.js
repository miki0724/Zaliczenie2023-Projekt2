import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Sklep from "./pages/Sklep";
import Koszyk from "./pages/Koszyk";
import Ulubione from "./pages/Ulubione";
import Login from "./pages/Login";
import ZapomnialemHasla from "./pages/ZapomnialemHasla";
import Zarejestruj from "./pages/Zarejestruj";
import ResetHasla from "./pages/ResetHasla";
import Produkt from "./pages/Produkt";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Produkt" element={<Sklep />} />
            <Route path="Produkt/:id" element={<Produkt />} />
            <Route path="about" element={<About />} />
            <Route path="wishlist" element={<Ulubione />} />
            <Route path="koszyk" element={<Koszyk />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="login" element={<Login />} />
            <Route path="ZapomnialemHasla" element={<ZapomnialemHasla />} />
            <Route path="Zarejestruj" element={<Zarejestruj />} />
            <Route path="ResetHasla" element={<ResetHasla />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
