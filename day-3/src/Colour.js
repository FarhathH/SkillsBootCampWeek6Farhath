import './Colour.css';
import {useState} from 'react';

function ColourButton(props){
    //useState function for single variable.
    const[colourBackground, setColourBackground] = useState(props.colourBackground);
        
    //executes when function runs
    return(
        <>
        <button style = {{backgroundColor: props.colourBackground}} className = "page">
             <p class = "mini">{props.colourBackground}</p>
        </button>
        <div className = "bottom">
        
        </div>
        </>
    );
}
export default ColourButton;