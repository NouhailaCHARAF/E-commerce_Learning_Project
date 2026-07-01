import { useEffect, useState } from "react"



export default function CartPage(){

const[listData,setListData]=useState([])

useEffect(()=>{

const dataLocal=localStorage.getItem("product")
const dataObject=dataLocal ? JSON.parse(dataLocal):[]
setListData(dataObject)

},[])

let total=0;
 listData.forEach((item)=>{
    total += item.price
 })

 const DeleteProduct=(idToDelete)=>{
const dataUpdate =listData.filter((item)=>item.id !== idToDelete)
setListData(dataUpdate)

localStorage.setItem("product",JSON.stringify(dataUpdate))
 }

 
return(

    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Products</h1>

      <div className="space-y-4">
        {listData.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-6 bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            
            <img
              src={product.image}
              alt={product.title}
              className="w-28 h-28 object-cover rounded-lg"
            />

            
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800">
                {product.title}
              </h2>

              <p className="mt-2 text-2xl font-bold text-blue-600">
                {product.price}
              </p>
            </div>

            
            <button className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition" value={product.id} onClick={()=>DeleteProduct(product.id)}>
              Delete
            </button>
          </div>
        ))}
        
      </div>
      <div className="mt-8 bg-white shadow rounded-xl p-6">

        <div className="flex justify-between items-center border-b pb-4">
          <span className="text-xl font-semibold">
            Total
          </span>

          <span className="text-2xl font-bold text-blue-600">
            ${total}
          </span>
        </div>

        <button className="w-full mt-6 bg-green-700 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition">
          Place Order
        </button>

      </div>

    </div>
)

}