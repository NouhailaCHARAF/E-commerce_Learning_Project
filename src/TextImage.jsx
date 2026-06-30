

import { Link } from "react-router-dom"
export default function TextImage(){



    return(
<section className="min-h-[70vh] flex items-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Build modern websites
            <span className="text-green-600"> with elegance</span>
          </h1>

          <p className="mt-5 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            CDiscover a collection of stylish, high-quality bags designed for every occasion. 
            From everyday essentials to travel and fashion accessories, our products combine durability, comfort, and timeless design to match your lifestyle.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-block px-6 py-3 rounded-xl bg-yellow-500 text-white font-medium shadow-md hover:bg-indigo-700 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        
        <div className="flex justify-center md:justify-end">
          <img
            src="\src\assets\bag.jpg"
            alt="Hero"
            className="w-full max-w-md rounded-2xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>

    )
}