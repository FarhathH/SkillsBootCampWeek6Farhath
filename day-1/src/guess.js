import './guess.css';
import {useState} from 'react';




function RandomNum(){
   
    const[guess, setGuess] = useState("") 
   
    return(
    <>
        <h2>Guess the number:</h2>
        {typeof guess}
        <div className = "layout">
            <input type = "number" className = "input-guess" onChange={(event)=>{setGuess(parseInt(event.target.value))}}/>     
            <button className = "guess-button">
                <strong>GUESS</strong>
            </button>
        </div>
        
    </>
   );

}

export default RandomNum;
