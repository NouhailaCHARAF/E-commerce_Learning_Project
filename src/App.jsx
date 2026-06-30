import { useState } from 'react'
import Home from './Home'
import About from './About'
import { BrowserRouter ,Routes ,Route ,Link} from 'react-router-dom'
import Slider from './Slider'
import Header from './Header'
import Product from './Products'
import Contact from './Contact'
import Footer from './Footer'
import RegistrationForm from './RegisterForm'
import LoginForm from './LoginForm'
import CartPage from './CartPage'
import ProductsPgae from './ProductsPage'



function App() {
 

  return (
  <BrowserRouter>
   
   
   
  <Header />
 

 
 <main className="min-h-screen">

   <Routes>
   
   <Route path="/" element={<Home />}/>
   <Route path="/about" element={<About />}/>
   <Route path="/products" element={<ProductsPgae />}/>
   <Route path="/contact" element={<Contact />}/>
   <Route path="/registration" element={<RegistrationForm />}/>
   <Route path="/login" element={<LoginForm />}/>
   <Route path="/cart" element={<CartPage />}/>

   </Routes>
   </main>
   <Footer />
   </BrowserRouter>
  )
}

export default App
