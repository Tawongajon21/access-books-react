import React from 'react'
import { useState } from 'react/cjs/react.development';



import { data } from '../data';
import defaultPhoto from '../photos/default.webp'
import SimilarBooks from './similarBooks';



const SingleBook = (props) => {
    const [downloads,setDownloads]= useState(0);
    const [details]= useState(props);
    
    
  
    const  [books]= useState(data);
  
   
   
   const slug= details.match.params.slug


   
    
  
  
    function   getBook(slug){
        let tempBooks= books;
        const book= tempBooks.find((book)=>book.slug===slug);
        console.log(book);
        return book
      
        
        }
        getBook(slug);
        let pdfs= data.find((pdf)=>pdf.slug===slug);
       
 
 

const addNumbers=()=>{
setDownloads(downloads+1)
}


 const {author,file,photo,name,category}= pdfs;
const similarBooks= data.filter((datas)=>datas.category===category)
console.log(similarBooks);
    return (
        <>
        <div className='single-book-component-single'>
<section id='book-card-single'>
<article>
    <img src={photo||defaultPhoto} width='90' alt='book' height='90'/>
</article>
<div className='right-part'>
<main className='main-right-single'>
    <p className='title-book-single'>
       {name}
    </p>
    <p className='p-author'>
       <span className='author-author'>Author</span> 
        : <span className='span-author'>{author}</span> 
    </p>
    <div className='btns-div'>
        <a href={file} download onClick={addNumbers}  className='btn-download'>
            Download
        </a>
    </div>
 
</main>
</div>

</section>
       
     

  
       </div>
       <section className="similar-books-component-section">
<header className='header-similar'>
    <h3>Similar Books</h3>
    </header>
      
       <div id="similar-books-component" >
    {
       
        similarBooks.map((book)=>{
            const {id,name,author,desc,photo,slug}=book;
            return        <SimilarBooks key={id} slug={slug} name={name} desc={desc} photo={photo} author={author}/>     
          
        })
    }
</div>
</section>
    </>
    )
}

export default SingleBook
