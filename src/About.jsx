export default function About(){


    return(
        <div className="bg-gray-50 text-gray-900">

            <section className="bg-black text-white py-16">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold">
        About Us
      </h1>
      <p className="mt-4 text-gray-300 text-lg">
        We build modern digital experiences that help businesses grow.
      </p>
    </div>
  </section>

  
  <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

    
    <div>
      <h2 className="text-3xl font-bold mb-4">
        Who We Are
      </h2>
      <p className="text-gray-600 leading-relaxed">
        We are a creative team specialized in web development and design.
        Our goal is to deliver clean, fast, and user-friendly websites that
        provide real value to businesses and users.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        With modern technologies like HTML, CSS, Tailwind, and JavaScript,
        we build scalable and responsive digital products.
      </p>
    </div>

    
    <div>
      <img
        src="\src\assets\bag.jpg"
        alt="About image"
        className="rounded-2xl shadow-lg w-full object-cover"
      />
    </div>

  </section>

  
  <section className="bg-white py-16 border-t">

    <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

      <div>
        <h3 className="text-3xl font-bold text-green-600">50+</h3>
        <p className="text-gray-600 mt-2">Projects</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-green-600">30+</h3>
        <p className="text-gray-600 mt-2">Clients</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-green-600">5+</h3>
        <p className="text-gray-600 mt-2">Years Experience</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-green-600">100%</h3>
        <p className="text-gray-600 mt-2">Satisfaction</p>
      </div>

    </div>
  </section>

  
  <section className="py-16 bg-yellow-700 text-white text-center">

    <h2 className="text-3xl font-bold">
      Want to work with us?
    </h2>

    <p className="mt-3 text-green-100">
      Let’s build something amazing together.
    </p>

    <a
      
      className="inline-block mt-6 bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
    >
      Contact Us
    </a>

  </section>
        </div>
    )
}