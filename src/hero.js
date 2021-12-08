import {React} from 'react'
import { useContext } from 'react';
import Autocomplete from './autocomplete';
import { BookContext } from './bookContext';
import Featuredbooks from './featuredbooks';
const Hero = () => {
   
    
    const [books]= useContext(BookContext);
    const bookSuggestions= books.map((book)=>{
        const {name}= book;
        return  name 
    })




    return (
    <>
        <div className='hero-part'>
  <div className='hero-text'>
            <section className='section-h2'>
                <h2>Access Books</h2>
            </section>
            <main className='main-lorem-text'>
                <p className='p-main-lorem'> 
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Eveniet, ullam quos et harum repudiandae quae
                  cum ratione dignissimos itaque neque?

                </p>
            </main>
            <div className='search-container'>

<Autocomplete 
suggestions={
   bookSuggestions
}
/>

<div>
    <label>

    </label>
</div>
            </div>
        </div>

       
        </div>
        
        <Featuredbooks/>
    </>
    )
}

export default Hero
