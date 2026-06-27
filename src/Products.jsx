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

alert(`${product.title}Product added!`)
  }
   

    return(

        <div className="grid gap-12">
        <div className="py-10  flex justify-center items-center bg-black">
            <h2 className="text-white font-bold text-3xl">OUER NEW COLLECTION</h2>
        </div>


       <div className="max-w-8xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
         
         {listProduct.map((item)=> (

            <a href="#" className="group relative block overflow-hidden">
            <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
            <span className="sr-only">Wishlist</span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
            </svg>
            </button>

            <img src={item.image} alt="" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72" />

            <div className="relative border border-gray-100 bg-white p-6">
            <span className="bg-yellow-400 px-3 py-1.5 text-xs font-medium whitespace-nowrap"> New </span>

            <h3 className="mt-4 text-lg font-medium text-gray-900">{item.title}</h3>

            <p className="mt-1.5 text-sm text-gray-700">{item.price}</p>

            <form className="mt-4">
            <button className="block w-full rounded-sm bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"  value={item.id} onClick={(e)=>addToCart(item,e)}>
             Add to Cart
            </button>
           </form>
           </div>
        </a>
         ))}
        
       

        </div>
        </div>
    )
}