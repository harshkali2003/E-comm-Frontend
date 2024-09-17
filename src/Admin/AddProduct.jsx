import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [name,setName] = useState("")
  const [desc , setDesc] = useState("")
  const [cat , setCat] = useState("")
  const [price , setPrice] = useState("")
  const[file , setFile] = useState("")
  const navigate = useNavigate()

  const AddProduct = async (e)=>{
    e.preventDefault()

    let data = await fetch('http://localhost:5000/addProduct',{
      method:"post",
      body:JSON.stringify({name,desc,cat,price}),
      headers:{'Content-Type' : 'application/json' , authorization :`bearer ${JSON.parse(localStorage.getItem('Token'))}`}
    })
    let result = await data.json()
    if(result){
      navigate('/all')
    }
  }

 const UploadFile = () =>{
  const formData = new FormData()
  formData.append('file' , file)
  axios.post('http://localhost:5000/addProduct' , formData)
  .then(res => {})
  .catch(err => console.log(err))
 }
  
  return (
    <div className="flex justify-center items-center text-xl text-center h-screen w-screen bg-slate-200">
      <div className="flex flex-col border-2 border-cyan-300 flex flex-col gap-10 p-6 bg-white rounded-md shadow-xl">
       
       <div className="border-2 border-cyan-950 rounded-lg">
          <input type="text" placeholder="Product Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div className="border-2 border-cyan-950 rounded-lg">
          <input type="text" placeholder="Product Description" value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
        </div>
        <div className="border-2 border-cyan-950 rounded-lg">
          <input type="text" placeholder="Product Category" value={cat} onChange={(e)=>{setCat(e.target.value)}}/>
        </div>
        <div className="border-2 border-cyan-950 rounded-lg">
          <input type="text" placeholder="Product Price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
        </div>
       
        <div>
          <input type="file" onChange={(e)=>{setFile(e.target.files[0])}}/>
          <button type="submit" onClick={UploadFile}>upload</button>
        </div>
        <div>
          <button type="submit" className="border-2 border-cyan-950 rounded-lg" onClick={AddProduct}>ADD PRODUCT</button>
        </div>
      </div>
    </div>
  );
}
