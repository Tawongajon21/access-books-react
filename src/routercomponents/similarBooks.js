import React from 'react'
import { Link } from 'react-router-dom'
import defaultPhoto from '../photos/default.webp'
const SimilarBooks = ({name,author,desc,photo,slug}) => {
  
    return (
        <div className='similar-book-container'>
    <Link  to={`books/${slug}`}  className='link-similar-book' >  
    

   
      <div className='similar-book'>
        <article>
            <img src={photo||defaultPhoto} alt='book' width='90' height='90'/>
        </article>
        <section className='section-right'>
<main className='main-name'>
    <p className='similar-name'>
        {name}
    </p>
    <p className='similar-author'>
        {author}
    </p>
    <p className='similar-desc'>
        {desc}
    </p>
</main>
        </section>
        </div>
        </Link>
        </div>
    )
}

export default SimilarBooks
