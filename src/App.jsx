import React, { useState } from "react";
import { BrowserRouter, json, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import LogIn from "./Authentication/LogIn";
import SIgnUp from "./Authentication/SIgnUp";
import AddProduct from "./Admin/AddProduct";
import UserProfile from "./Authentication/UserProfile";
import AllProducts from "./Pages/AllProducts";
import Cart from "./Pages/Cart";
import Feedback from "./Pages/Feedback";
import MainComponent from "./Component/MainComponent";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PrivacyPage from "./Pages/PrivacyPage";
import FQ from "./Pages/FQ";
import Success from "./Payments/Success";
import Failure from './Payments/Failure'



function App() {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState([]);
  const auth = localStorage.getItem("User");

  const handleClick = (item) => {
    let isPresent = false;
    cart.map((product) => {
      if (item._id === product._id) isPresent = true;
    });
    if (isPresent) return;
    setCart([...cart, item]);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar size={cart.length} setShow={setShow} />
        <Routes>
          {show ? (
            <Route
              path="/"
              element={<MainComponent/>}
            />
          ) : (
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
          )}

          {auth ? (
            <>
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/all" element={<AllProducts />} />
              <Route path="/product" element={<Products handleClick={handleClick}/>} />
              <Route path="/admin" element={<AddProduct />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/privacy" element={<PrivacyPage/>} />
              <Route path="/faq" element={<FQ/>} />
              <Route path="/paymentSuccess" element={<Success/>} />
              <Route path="/paymentFail" element={<Failure/>} />
              
            </>
          ) : (
            <>
              <Route path="/log" element={<LogIn />} />
              <Route path="/sign" element={<SIgnUp />} />
            </>
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
