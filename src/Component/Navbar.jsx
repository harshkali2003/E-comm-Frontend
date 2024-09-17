import React, { useState } from "react";
import LogLogo from "../assets/Images/log-in_logo.jpg";
import hand from "../assets/Logo/hand-wave.png";
import { Link } from "react-router-dom";

export default function Navbar({ size, setShow }) {
  const auth = localStorage.getItem("User");

  return (
    <nav className="lg:grid grid-cols-3  p-2 sticky top-0 bg-sky-700 text-white  rounded-lg md:grid grid-cols-3 p-1 sticky top-0 sm:block">
      <div className="flex justify-center items-center text-lg font-sans space-x-2">
        <h1 className="text-3xl text-white font-medium">WELCOME</h1>
        <img src={hand} alt="" className="h-10 w-10 mix-blend-multiply" />
      </div>

      <div className="flex flex-col justify-center items-center gap-4">
        <div className="font-bold text-3xl" onClick={() => setShow(true)}>
          <h1>
            <Link to="/">ONLINE SHOP</Link>
          </h1>
        </div>
        <div className="lg:flex gap-4" id="nav-links">
          <div className="hover:text-violet-500">
            <Link to="/product">PRODUCTS</Link>
          </div>
          <div className="hover:text-violet-500">
            <Link to="/about">ABOUT</Link>
          </div>
          <div className="hover:text-violet-500">
            <Link to="/contact">CONTACT</Link>
          </div>
          <div className="hover:text-violet-500">
            <Link to="/feedback">FEEDBACK</Link>
          </div>
        </div>
      </div>

      <div className="flex gap-6 justify-center items-center">
        {auth ? (
          <div className="flex gap-3 justify-center items-center">
            <img src={LogLogo} alt="" className="h-10 w- mix-blend-multiply" />
            <h3 className="hover:text-violet-500">
              <Link to="/profile">{JSON.parse(auth).name}</Link>
            </h3>
          </div>
        ) : (
          <div className="flex gap-3 justify-center items-center">
            <img src={LogLogo} alt="" className="h-10 w- mix-blend-multiply" />
            <h3 className="hover:text-violet-500">
              <Link to="/log">Log In</Link>
            </h3>
          </div>
        )}

        <div className="hover:text-violet-500" onClick={() => setShow(false)}>
          <h3>
            <Link to="/cart">
              Cart{" "}
              <span className="space-x-2 bg-red-500 rounded-full">{size}</span>
            </Link>
          </h3>
        </div>
      </div>
    </nav>
  );
}
