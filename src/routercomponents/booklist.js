import React from 'react';
import { Link } from 'react-router-dom';
import defaultPhoto from '../photos/default.webp'

const BookList = ({name,author,photo,desc,slug}) => {
    return (
        <Link to={`books/${slug}`} className='link-single'>
        <div className='featured-books'>
        <article className='single-book'>
        <div className='photo-container'>
        <img src={photo || defaultPhoto} className='book-photo' alt='book'  width='200' height='200'/>
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
      
        <div className='read-more'>
    <p className='p-read-more'>
        <a href='#!'>
            Read More
        </a>
    </p>
        </div>
        </main>
            </article>
            </div>
            </Link>
    )
}

export default BookList
