import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
       <footer>
           <header id='header-footer-center' className='header-footer'>
               <h3>
                   Access Books
               </h3>
           </header>
           <div className='div-headers'>
           <header className='header-footer'>
               <h3>
                Main Links
               </h3>
               <div className='ul-footer-a'>
               <li><Link to='/books' className='footer-a'>Books</Link></li>
               <li><Link to ='/contribute' className='footer-a'>Contribute</Link></li>
               <li><Link to='/about' className='footer-a'>About</Link></li>
               <li><Link to='/contact' className='footer-a'>Contact</Link></li>

           </div>
           </header>
           <header className='header-footer'>
               <h3>
                Social Links
               </h3>
               <div className='socials-ul'>
           <li><a href='!#' className='footer-socials'>Facebook</a></li>
           <li><a href='!#' className='footer-socials'>Twitter</a></li>
           <li><a href='!#' className='footer-socials'>LinkedIn</a></li>
           <li><a href='!#' className='footer-socials'>Gmail</a></li>
               </div>
           </header>
         
           </div>
          
         
     

       </footer>
    )
}

export default Footer
