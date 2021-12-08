import {React} from 'react';
import { useContext } from 'react/cjs/react.development';
import  {BookContext}  from './bookContext';
import defaultPhoto from './photos/default.webp'
import { Link } from 'react-router-dom';

const Featuredbooks = () => {


const [books]= useContext(BookContext);


const featured= books.filter((book)=>book.featured===true);


    return (
        <div className='featured-books'>
            <header className='header-featured-books'>
                <h2 className='h2-featured-books'>
                    Featured Books
                </h2>
            </header>
            <section className='section-featured-book'>
                {
featured.map((feature)=>{
    const {id,author,category,name,photo,desc,slug}= feature;
 return    <Link to={`books/${slug}`}  key={id} style={{textDecoration:"none",color:"#000" }}>
  <article className='single-book' >
    <div className='photo-container'>
    <img src={photo || defaultPhoto} alt='book' className='book-photo' width='200' height='200'/>
    </div>
    <main className='main-right'>
        <header className='header-h3-book'>
            <h3>{name}</h3>
        </header>
        <p className='p-h3-author'>
         <h4>   {author}</h4>
        </p>
    <section className='section-h3-desc'>
        <p className='p-desc'>
            {desc}
        </p>
    </section>
    <div  className='div-category'>
        <p>
            {category}
        </p>
    </div>
    <div className='read-more'>
<p className='p-read-more'>
    <a href='#!'>
        Read More
    </a>
</p>
    </div>
    </main>
        </article>
 </Link>
 
})
                }
   
            </section>
           
        </div>
    )
}

export default Featuredbooks
