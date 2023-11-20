import './guess.css';
import {useState} from 'react';




function RandomNum(){
   
    const[guess, setGuess] = useState("")
    const[answer, setAnswer] = useState(5)
    const [message, setMessage] = useState("Guess the number between 1 and 10")  

    function MakeGuess(){
        if(setGuess<answer){
            setMessage('Too low')
        }
        else if(setGuess>answer){
            setMessage('Too high')
        }
   }
   
   
    return(
    <>
        <h2>{message}</h2>
        {typeof guess}
        <div className = "layout">
            <input type = "number" className = "input-guess" onChange={(event)=>{setGuess(parseInt(event.target.value))}}/>     
            <button onClick = {MakeGuess} className = "guess-button">
                <strong>GUESS</strong>
            </button>
        </div>
        
    </>
   );



}

export default RandomNum;
