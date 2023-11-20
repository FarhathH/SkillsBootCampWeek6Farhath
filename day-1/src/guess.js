import './guess.css';
import {useState} from 'react';




function RandomNum(){
   
    // useState variable to use for checking condition
    const[guess, setGuess] = useState("")
    const[answer, setAnswer] = useState(5)
    const[message, setMessage] = useState("Guess the number between 1 and 10")  
    const[lives, setLives] = useState(3)

    // This should change the message based on input from user.
    function MakeGuess(){
        if(guess == answer){
            setMessage("You got it")
        }
        else if(guess>answer && lives>0){
            setLives(lives-1)
            setMessage("Too high")
            alert(`You have ${lives} remaining`)
        }
        else if(guess<answer && lives>0){
            setLives(lives-1)
            setMessage("Too low")
            alert(`You have ${lives} remaining`)
        }
        else if(lives == 0){
            setMessage("Loser")
        }
        
        
   }
   
//    This should be displayed on the interface
    return(
    <>
        <div className = "box">
            <h2>{message}</h2>
            {/* {typeof guess} */}
            <div className = "layout">
                {/* onChange function takes input as setGuess. */}
                <input type = "number" className = "input-guess" onChange={(event)=>{setGuess(parseInt(event.target.value))}}/> 
                {/*Checks for the correct answer when the button is clicked*/}    
                <button onClick = {MakeGuess} className = "guess-button">
                    <strong>GUESS</strong>
                </button>
            </div>
        </div>
        
    </>
   );



}

export default RandomNum;
