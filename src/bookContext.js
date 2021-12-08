import {React,useState} from 'react'
import { createContext } from 'react/cjs/react.development'
import { data } from './data';





export const BookContext= createContext();
export const BookFunction= createContext();

export const BookProvider=(props)=>{
   
    const  [books,setBooks]= useState(data);
    function   getBook(slug){
    let tempBooks= books;
    const book= tempBooks.find((book)=>book.slug===slug);
    return book;
    }
   
  
    return(
        <>
     

       
       
        <BookContext.Provider value={[books,setBooks] }   getBook={getBook} >
            {
                props.children
            }
           
        </BookContext.Provider>
        
        
</>

    )
}

