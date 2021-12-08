import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AutoComplete extends Component {
    constructor(props){
        super(props)
        this.state={
activeSuggestions:0,
filteredSuggestions:[],
showSuggestions:false,
userInput:''
        }
    }
    static propTypes={};
    static defaulProperty={
        suggestions:[]
    }
    render() {
        let {
            onChange,OnKeydown,
            state:{
            
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        }= this
        onChange=e=>{
            const {suggestions}= this.props
            const userInput=e.currentTarget.value
            const filteredSuggestions=suggestions.filter((suggestion)=>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase())>-1
            )
            console.log(filteredSuggestions);
            this.setState({
                activeSuggestion:0,
                filteredSuggestions,
                showSuggestions:true,
                userInput:e.currentTarget.value

            })
        }
        OnKeydown=(e)=>{
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
    return 
}
this.setState({
    activeSuggestion:activeSuggestion-1
})
            }
            else if(e.keyCode===40){
if (activeSuggestion-1===filteredSuggestions.length) {
    return
}
else if(activeSuggestion-1===filteredSuggestions.length){
return
}
else{

}
            }
      
         
        }
        let suggestionsListComponent;
        if (showSuggestions&&userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent=(
                    <div  className='suggestions-div'>
                        {
                           
                            filteredSuggestions.map((suggestion)=>{
                            
                                return (
                                    <p className='p-suggestion'>
                                         <Link   to={`books/${suggestion}`}  className='suggestions-a'> 
                                         {suggestion}
                                         </Link>
                                    </p>
                                )
                            })
                        }
                    </div>
                )

            }
            else{
                suggestionsListComponent=(
                    <div className='no-suggestions-div'>
  <p className='no-suggestions-p'>
                        No Books that are matching your search criteria.
                    </p>
                    </div>
                  
                )
            }
        }
        return (
            <div className='div-search-component'>
                
                
                <input type='text' 
                
                onChange={onChange}
                onKeyDown={OnKeydown}
                value={userInput}
                className='input'
                />
                {
                     suggestionsListComponent
                }
            
            </div>
        )
    }
}

