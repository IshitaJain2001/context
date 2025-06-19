 import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Button from './Button'
 
 export default function App() {
   return (
     <div>
         

         <nav>
         <Link to="/home">
         <button>HOME</button>
         </Link> 
        <Link to="/about">
         <button>ABOUT US</button>
        </Link>
        <Link to="/contact">
           <button>CONTACT US </button>
        </Link>  
       
         </nav>
<Routes>
<Route path='/home' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
</Routes>

<Button/>
     </div>
   )
 }
 
