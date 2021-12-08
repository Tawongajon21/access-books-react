import React from 'react';
import { Link } from 'react-router-dom';



const Error = () => {
    return (
        <div className='error-page'>
            <article className='error-article'>
<h2 className='h2-error'>
    Error 
</h2>
<h3 className='h3-error'>
    Page Not Found
</h3>
            </article>
            <section className='section-link-return'>
                <Link to='/' className='link-return-home'> 
                Return Home
                </Link>
            </section>
        </div>
    )
}

export default Error
