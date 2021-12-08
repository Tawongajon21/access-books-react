import React from 'react'


import Navbar from './navbar';

import Hero from './hero';
import Footer from "./footer";
import Books from './routercomponents/books';
import { BookProvider } from './bookContext';

import SingleBook from './routercomponents/singleBook';
import Error from './Error';
import Contribute from './routercomponents/contribute';
import { Route, Switch} from 'react-router';
import About from './routercomponents/about';




const App = () => {
  
   
    return (
        
       <>
       
      
<BookProvider>
    
    <Navbar/>
    <Switch>


   
<Route exact path='/' component={Hero} />
<Route  exact path='/books' component={Books}/>

  <Route exact path='/books/:slug' component={SingleBook}/>

  <Route exact path='/contribute' component={Contribute}/>
  <Route exact path='/about' component={About}/>

<Route component={Error}/>
  </Switch>    
</BookProvider>



<Footer/>

       </>
    )
}

export default App
