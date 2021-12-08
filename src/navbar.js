import React from 'react'
import { useState } from 'react/cjs/react.development';
import PhoneNav from './phoneNav';
import { Link } from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa'
const Navbar = () => {
    const [showNav,setShowNav]= useState(false)
    return (
        <div>
        <nav>
        <header>
            <h2>
            <Link to='/' style={{textDecoration:"none" ,color:'#ff48a5'}}>
            Access Books
            </Link>    
            </h2>
        </header>
       
        <ul className="ul-nav">
            <li>
               <Link className="btn-links" to='/books'>
                Books
                </Link>  
              
                </li>
            <li>
            <Link className="btn-links" to='/contribute'>
            Contribute
                </Link>  
                
                </li>
            <li>
            <Link className="btn-links" to='/about'>
            About
                </Link>  
                
                </li>
            <li>
            <a href='#header-footer-center' className="btn-links" to='/contact'>
            Contact
                </a>  
                
                </li>
          
        </ul>
       
        <div className='div-phone-nav'>
            <button type='button' className='btn-menu' onClick={()=>setShowNav(!false)}><FaAlignRight/></button>
        </div>

        </nav>
        {
            showNav ?  <PhoneNav/>  : ""
        }
      
        </div>
    )
}

export default Navbar
