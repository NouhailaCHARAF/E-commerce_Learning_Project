import { Link } from "react-router-dom"

export default function Slider(){


 
  return (
   
<section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900 bg-[url('src/assets/slider.png')] bg-cover bg-center" >
  <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
    <div className="max-w-prose text-left bg-[#0000005c] p-[45px] border rounded-r-xl">
      <h1 className="text-4xl font-bold text-white sm:text-5xl dark:text-white">
        Understand user flow and
        <strong className="text-green-600"> increase </strong>
        conversions
      </h1>

      <p className="mt-4 text-base text-pretty text-white sm:text-lg/relaxed dark:text-white-200">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi.
        Natus, provident accusamus impedit minima harum corporis iusto.
      </p>

      <div className="mt-4 flex gap-4 sm:mt-6">
        <Link
          className="inline-block rounded border border-green-600 bg-green-700 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-green-600"
          to="/contact"
        >
          Get Started
        </Link>

        <Link
          className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
          to="/about"
        >
          Learn More
        </Link>
      </div>
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 768"
      className="mx-auto hidden max-w-md text-gray-900 md:block dark:text-white"
    >
      
    </svg>
  </div>
</section>

  )
}