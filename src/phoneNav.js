import {React,useState} from 'react'
import { Link } from 'react-router-dom'
const PhoneNav = () => {
    const [show,setShow]= useState(true)
    return (
     
show?    <ul className="phone-ul-nav">
<li>
<Link id='phone-nav' className="btn-links"  to='/books' onClick={()=>setShow(!true)}>
                Books
                </Link>  
   </li>
<li>
<Link id='phone-nav' className="btn-links" to='/contribute' onClick={()=>setShow(!true)}>
Contribute
                </Link>  
   </li>
<li>
<Link id='phone-nav' className="btn-links" to='/about' onClick={()=>setShow(!true)}>
About
                </Link>  
   </li>
<li>
<Link id='phone-nav' className="btn-links" to='/contact' onClick={()=>setShow(!true)}>
Contact
                </Link>  
   </li>

</ul> : ""
     
           
        
    )
}

export default PhoneNav
