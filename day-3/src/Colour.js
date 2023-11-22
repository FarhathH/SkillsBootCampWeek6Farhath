import './Colour.css';
import {useState} from 'react';

function ColourButton(props){

    const[colourBackground, setColourBackground] = useState(props.colourBackground);


    return(
        <>
        <div className = "page">
            <p style = {{backgroundColor:colourBackground}} className = "mini">{colourBackground}</p>
            
        </div>
        <div className = "bottom">
        
        </div>
        </>
    );
}
export default ColourButton;