import React, { useEffect, useState } from "react";
import deleteLogo from "../assets/Logo/delete.jpg";

export default function AllProducts() {
  const [name, setName] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch("http://localhost:5000/products" , {
      headers :{
        authorization :`bearer ${JSON.parse(localStorage.getItem('Token'))}` 
      }
    });
    let result = await data.json();
    setName(result);
  };

  const handleDelete = async (id) => {
    let data = await fetch(`http://localhost:5000/addProduct/${id}`, {
      method: "delete",
      headers :{
        authorization :`bearer ${JSON.parse(localStorage.getItem('Token'))}` 
      }
    });
    let result = await data.json();
    if (result) {
      fetchData();
    }
  };
  return (
    <>
      <div class="container mx-auto">
        <div class="bg-white shadow-md rounded my-6 h-fit">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-3 px-6 text-left cursor-pointer">PRODUCT Name</th>
                <th class="py-3 px-6 text-left cursor-pointer">
                  PRODUCT DESCRIPTION
                </th>
                <th class="py-3 px-6 text-left cursor-pointer">
                  PRODUCT CATEGORY
                </th>
                <th class="py-3 px-6 text-left cursor-pointer">
                  PRODUCT PRICE
                </th>
              </tr>
            </thead>

            <tbody class="text-gray-600 text-sm font-light">
              {name.map((item) => (
                <tr class="border-b border-gray-200 hover:bg-gray-100" key={item._id}>
                  <td class="py-3 px-6 text-left whitespace-nowrap">
                    {item.name}
                  </td>
                  <td class="py-3 px-6 text-left">{item.desc}</td>
                  <td class="py-3 px-6 text-left">{item.cat}</td>
                  <td class="py-3 px-6 text-left">{item.price}</td>
                  <td class="py-3 px-6 text-left">
                    <button onClick={() => handleDelete(item._id)}>
                      <img src={deleteLogo} alt="" className="h-24" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
