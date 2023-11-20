import './guess.css';
import {useState} from 'react';




function RandomNum(){
   
    const[guess, setGuess] = useState("") 
   
    return(
    <>
        <h2>Guess the number:</h2>
        {guess}
        <div className = "layout">
            <input type = "number" className = "input-guess" onChange={(setGuess)=>{console.log(setGuess.target.value)}}/>     
            <button className = "guess-button">
                <strong>GUESS</strong>
            </button>
        </div>
        <h3 id = "help-me"></h3>
    </>
   );

}

export default RandomNum;
