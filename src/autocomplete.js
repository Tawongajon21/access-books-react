import React, { Component } from 'react'

import { Link } from 'react-router-dom';
export default class Autocomplete extends Component {
    constructor(props){
        super(props);
        this.state={
            activeSuggestions:0,
            filteredSuggestions:[],
            showSuggestions:false,
            userInput:'',
           
        }
    }
    static propTypes={};
    static defaultProperty={
        suggestions:[]
    }
    render() {
        let {
            onChange,onClick,onKeyDown,
            state:{
                
                filteredSuggestions,
                showSuggestions,
            userInput
            }
        }= this
        onChange=(e)=>{
            const {suggestions}= this.props;
            const userInput=e.currentTarget.value;
            const filteredSuggestions=suggestions.filter((suggestion)=>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) >-1
            )
     
        this.setState({
            activeSuggestion:0,
            filteredSuggestions,
            showSuggestions:true,
            userInput:e.currentTarget.value
        })
    }
    onKeyDown=(e)=>{
        const {activeSuggestion,filteredSuggestions}= this.state;
        if (e.keyCode===13) {
            this.setState({
                activeSuggestion:0,
                showSuggestions:false,
                userInput:filteredSuggestions[activeSuggestion]
            })
        }
        else if(e.keyCode===38){
if (activeSuggestion===0) {
    return;
}
this.setState({
    activeSuggestion:activeSuggestion-1
})
        }
        else if( e.keyCode===40){
           if (activeSuggestion-1===filteredSuggestions.length) {
               return;
           }
        }
        else if(e.keyCode===40){
            if (activeSuggestion-1===filteredSuggestions.length) {
                return 
            }
            this.setState({activeSuggestion:activeSuggestion+1})
        }
         else {
            
        }
    }
        let suggestionsListComponent;
        if (showSuggestions&& userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent=(
                    <div className='suggestions-div'>
                        {
                            filteredSuggestions.map((suggestion,index)=>{
                                return (

                                    <p key={suggestion} onClick={onClick} 
                                   className='p-suggestion'
                                    >
                   <Link   to={`books/${suggestion}`}  className='suggestions-a'>     {suggestion} </Link>
                                    </p>
                                )
                            })
                        }
                    </div>
                );
                
            }
            else{
                 suggestionsListComponent=(
                     <div className='no-suggestions'>
<em>
    No books matching your search !
</em>
                     </div>
                 )   
            }
        }
        return (
            <>
            <div className='div-search-component'>
            <input type='text' name='search-text' 
    placeholder='search for any book'
 onChange={onChange}
 onKeyDown={onKeyDown}
 value={userInput}
      className='input' />
  {
      suggestionsListComponent
  }
            </div>
           
            </>
        )
    }
}
