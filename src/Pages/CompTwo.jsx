import React, { useState, useEffect } from "react";
import pic from "../assets/Images/pexels-maryiaplashchynskaya-3615455.jpg";
// import SearchLogo from "../assets/Images/serach-logo.jpg";


export default function CompTwo({handleClick}) {
  const [name, setName] = useState([]);
  // const [product , setProduct] = useState("")
 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch("https://e-comm-backend-pxwb.onrender.com/products" , {
      headers :{
        authorization :`bearer ${JSON.parse(localStorage.getItem('Token'))}` 
      }
    });
    let result = await data.json();
    setName(result);
  };


  // const HandleSearch = async (event)=>{
  //   let key = event.target.value;
  //   let result = await fetch(`https://localhost:5000/search/${key}`);
  //   result = await result.json()
  //   if(result){
  //     setProduct(result)
  //   }
  // }
  
 

  return (
    <>

{/* <div className=" flex justify-center items-center text-lg font-sans bg-cyan-800">
        <input
          type="search"
          name=""
          id=""
          placeholder="search"
          className="border-2 border-cyan-700 rounded-full text-center text-blue-600" onChange={HandleSearch}
        />
        <button type="submit">
          <img
            src={SearchLogo}
            alt="logo"
            className="h-8 w-8 mix-blend-multiply"
          />
        </button>
      </div> */}

      <div className="flex flex-wrap justify-center items-center h-fit w-screen bg-cyan-800 gap-10 p-3">

        {name.map((item) => (
          <div
            key={item._id} 
            className="border-2 bg-white rounded-lg flex flex-col justify-center items-center h-80 w-80"
          >
            <img src={pic} alt="preview" className="h-44 w-52" />
            <div className="text-sm flex flex-col gap-2">
              <p className="font-semibold">
                {" "}
                NAME : <span className="space-x-4"> {item.name} </span>
              </p>
              <p className="font-semibold">
                Category : <span className="space-x-4"> {item.cat} </span>
              </p>
              <p className="font-semibold">
                Description : <span className="space-x-4"> {item.desc} </span>
              </p>
              <p className="font-semibold">
                Price : <span className="space-x-4"> {item.price} </span>
              </p>

            </div>

            <div className="space-x-4">
              <button className="border-2 bg-teal-400 rounded-md p-1">
                Buy Now
              </button>
              <button className="border-2 bg-red-400 rounded-md p-1" onClick={()=> handleClick(item)}>
                Add to Cart
              </button>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
