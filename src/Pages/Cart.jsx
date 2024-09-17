import React, { useEffect, useState } from "react";
import visa from "../assets/Images/visa.svg";
import paypal from "../assets/Images/paypal.png";
import mastercard from "../assets/Images/mastercard.svg";
import amex from "../assets/Images/amex.svg";
import deleteLogo from "../assets/Logo/delete.jpg";
import Candle from "../assets/Images/candles.jpg";
import axios from "axios";
import Razorpay from 'razorpay'

export default function Cart({ cart, setCart }) {
  const [value, setValue] = useState(1);
  const [price, setPrice] = useState(0);
  const dd = new Date();

  const IncrementFunction = () => {
    setValue(value + 1);
  };

  const DecrementFunction = () => {
    setValue(value - 1);
    if (value == 1) {
      setValue(1);
    }
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += value * item.price));
    setPrice(ans);
  };

  useEffect(() => handlePrice());

  const handleRemove = (_id) => {
    const arr = cart.filter((item) => item._id != _id);
    setCart(arr);
  };

  const createOrder = async () => {
    try {
      const response = await axios.post('http://localhost:5000/user/payment' , {amount:price})
      paymentVerify(response.data);
    }catch (error){
      console.log('error');
    }
  }

  const paymentVerify = async (data)=>{
    const options = {
      key : "rzp_test_W24Nn0oJ5atcPr",
      price : data.price,
      currency : "INR",
      name: "Harsh",
      order_id : data.OrderId,
      callback_url : 'http://localhost:5000/user/paymentVerify',
      notes : {
        address : "Razorpay Corporate Office"
      },
      theme : {
        color : "#3399cC"
      }
    }
  
    new window.Razorpay(options).open()
  };
  return (
    <>
      {cart?.map((item) => (
        <div
          className="flex justify-center bg-sky-500 h-fit text-lg gap-7 p-4"
          key={item._id}
        >
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex flex-col h-fit w-96 border-2 shadow-lg bg-white rounded-lg">
              <h2 className="border-b-2 m-3 p-2">CART ITEMS {}</h2>
              <div className="flex">
                <div className="border-2 bg-white shadow-lg h-36 w-36 m-5 p-3">
                  <img src={Candle} alt="preview" className="h-32 w-36" />
                </div>

                <div className="flex gap-2 justify-center items-center m-3 p-1">
                  <button
                    className="border-2 bg-blue-500 rounded-md"
                    onClick={DecrementFunction}
                  >
                    <h2 className="text-2xl text-white">-</h2>
                  </button>
                  <p className="border-2 h-fit" value={value}>
                    {value}
                  </p>

                  <button
                    className="border-2 bg-blue-500 rounded-md"
                    onClick={IncrementFunction}
                  >
                    <h2 className="text-2xl text-white">+</h2>
                  </button>
                </div>

                <button onClick={() => handleRemove(item._id)}>
                  <img src={deleteLogo} alt="" className="h-24" />
                </button>
              </div>

              <h2 className="font-medium m-2 p-1 border-b-2">SUMMERY</h2>

              <div className="text-base font-light m-2 p-1 gap-3 border-b-2">
                <p className="text-indigo-600 font-semibold">
                  PRODUCT <span className="text-xl"> {item.name} </span>
                </p>
                <p className="text-indigo-600 font-semibold">
                  PRICE <span className="text-xl"> {item.price}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex flex-col justify-center items-center bg-sky-500 h-fit text-lg gap-7 p-4">
        <div className="flex flex-col h-24 w-96 border-2 shadow-lg bg-white rounded-lg h-fit">
          <h3 className="text-xl font-semibold m-2 ">
            TOTAL AMOUNT <span className="text-red-700 shadow-lg">{price}</span>
          </h3>

          <h2 className="m-3">expected delivery</h2>
          <p className="text-sm m-1 p-1">
            {" "}
            {`${dd.getDate()}/${dd.getMonth() + 1}/${dd.getFullYear()} to ${
              dd.getDate() + 4
            }/${dd.getMonth() + 1}/${dd.getFullYear()}`}
          </p>

          <button className="border-2 bg-blue-500 w-fit text-white rounded-lg p-2 mt-3" onClick={createOrder}>
            GO TO CHECKOUT
          </button>
        </div>

        <div className="flex flex-col h-24 w-96 border-2 shadow-lg bg-white rounded-lg">
          <h2 className="m-3">we accept</h2>
          <div className="flex gap-3 justify-center items-center">
            <img src={visa} alt="" className="h-10 w-10" />
            <img src={amex} alt="" className="h-10 w-10" />
            <img src={paypal} alt="" className="h-10 w-10" />
            <img src={mastercard} alt="" className="h-10 w-10" />
          </div>
        </div>
      </div>
    </>
  );
}
