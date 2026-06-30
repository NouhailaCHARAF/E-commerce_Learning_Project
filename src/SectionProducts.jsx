
import { Link } from "react-router-dom"
import Product from "./Products"

export default function SectionProducts(){




    return(

    
    
    <section className="py-16 bg-gray-50">
  
  
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      Our Products
    </h2>
    <p className="mt-3 text-gray-600">
      Explore our latest collection of premium products, carefully selected
        to combine quality, style, and exceptional value.
    </p>
    <Link className="text-red-700 font-bold" to="/products">Show more ...</Link>
  </div>

 
  <div >

    <Product />

      </div>
  
</section>
    
    

    )
}