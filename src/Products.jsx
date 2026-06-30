import { useState } from "react"



export default function Product(){


const [listProduct,setlistProduct]=useState([
        { id: 1, title: "Classic Black ", price: 299, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1GfYLkChDiR1C9Q6nqE9FgePeeSO_pfbc2i19OaXwnA&s" },
        { id: 2, title: "Modern Hoodie", price: 499, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQeIw9gKEdfMQVN2-U53B9MvuQvDF6yLIBReC3hnVNw&s" },
        { id: 3, title: "Leather Jacket", price: 899, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxHLbREfojFMZ-SvTeioebbYanSgzSQv5Ihx3mr3MOQ&s" },
        { id: 4, title: "Black Hoodie", price: 779, image: "https://www.sacre.ma/web/image/product.image/2032/image_1024/IMG_0158-Photoroom.webp?unique=5f6df0b" },
        { id: 5, title: "Leather Classic", price: 499, image: "https://img01.ztat.net/article/spp-media-p1/05e73c2a747e41c49b70e719230910b3/1bc484d263f24fbba4213beac8cc02b3.jpg?imwidth=300&filter=packshot" }
])

const addToCart=(product,e)=> {
    e.preventDefault()

const dataj=localStorage.getItem("product")
const dataC= dataj ? JSON.parse(dataj):[]

const listUp=[...dataC,product]

localStorage.setItem("product",JSON.stringify(listUp))


  }
   

    return(

       


       <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

  {listProduct.map((item) => (
    <div
      key={item.id}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      
      <div className="relative overflow-hidden">

        <button className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
          NEW
        </span>

        <img
          src={item.image}
          alt={item.title}
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

     
      <div className="p-6">

        <h3 className="text-lg font-semibold text-gray-800">
          {item.title}
        </h3>

        <p className="mt-2 text-2xl font-bold text-yellow-500">
          ${item.price}
        </p>

        <button
          onClick={(e) => addToCart(item, e)}
          className="mt-6 w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition duration-300 font-medium"
        >
          Add to Cart
        </button>

      </div>
    </div>
  ))}

</div>
        
    )
}