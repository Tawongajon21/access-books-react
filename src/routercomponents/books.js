import {React} from 'react'
import AutoComplete from './autocomplete';
import { BookContext } from '../bookContext';
import { useContext } from 'react/cjs/react.development';
import BookList from './booklist';
import { Link } from 'react-router-dom';

const Books = () => {
    const [books]= useContext(BookContext);
   
  const category= books.filter(book=>book.category==="Christianity");
  const motivation= books.filter(book=>book.category==='Motivation')

const journal= books.filter(book=>book.category==='Journal');
const programming= books.filter(book=>book.category==='Programming');

    const bookSuggestions= books.map((book)=>{
        const {name}=book;
        return name 
    })
    const searchPhoto=books.map((book)=>{
        const {photo}=book;
        return photo
    })
    const searchAuthor= books.map((book)=>{
        const {author}=book;
        return author
    })
  
    return (
        <div className='books-component-part'>
    
          
            <center>
                <p>
                    Leaders are readers.Here is an opportunity to learn and gain knowledge from an updated and huge book library.Easy to use website.Grab a book and enjoy!

                </p>
            </center>
            <section className='section-autocomplete'>
            <label className='label-search-here'>
                Search for books here
         </label>
                <AutoComplete
                 suggestions={bookSuggestions}
                 searchAuthor={searchAuthor}

                 searchPhoto={searchPhoto}/>
                 
                </section>
                <article>
<header className='header-category'>
    <h3>
        Christianity
    </h3>
</header>
<section className='section-featured-book'>
    {
        category.map((group)=>{
            const {id,name,author,photo,desc,slug}=group;
            return <BookList key={id} slug={slug} name={name} author={author} photo={photo} desc={desc}/>
        })
    }
</section>
                </article>
                <article>
<header className='header-category'>
    <h3>
        Motivation
    </h3>
</header>
<section  className='section-featured-book'>
    {
        motivation.map((group)=>{
            const {id,name,author,photo,desc,slug}=group;
            return <BookList key={id} slug={slug} name={name} author={author} photo={photo} desc={desc}/>
        })
    }
</section>
                </article>
                <article>
<header className='header-category'>
    <h3>
        Journals 
    </h3>
</header>
<section  className='section-featured-book'>
    {
        journal.map((group)=>{
            const {id,name,author,photo,desc,slug}=group;
            return <Link  to={`books/${slug}`}>
            <BookList key={id} slug={slug} name={name} author={author} photo={photo} desc={desc}/>
            </Link>
             
        })
    }
</section>
                </article>
                <article>
<header className='header-category'>
    <h3>
        Programming
    </h3>
</header>
<section  className='section-featured-book'>
    {
        programming.map((group)=>{
            const {id,name,author,photo,desc,slug}=group;
            return <BookList key={id} name={name} slug={slug} author={author} photo={photo} desc={desc}/>
        })
    }
</section>
                </article>
        </div>
    )
}

export default Books
