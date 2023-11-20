import './guess.css';
import {useState} from 'react';




function RandomNum(){
   
    // useState variable to use for checking condition
    const[guess, setGuess] = useState("")
    const[answer, setAnswer] = useState(5)
    const[message, setMessage] = useState("Guess the number between 1 and 10")  
    const[lives, setLives] = useState(3)
    const[gameOver, setGameOver] = useState(false)
    const[youWin, setYouWin] = useState(false)
    
    
    
    function Reset(){
        setGameOver(false)
        setLives(3)
        setMessage("Guess the number between 1 and 10")
    }

    // This should change the message based on input from user.
    function MakeGuess(){
        if(guess == answer){
            setMessage("You got it")
            setGameOver(true)
        }
        else if(guess>answer && lives>0){
            setMessage("Too high")
        }
        else if(guess<answer && lives>0){
            setMessage("Too low") 
        }
        else if(lives == 0){
            setMessage("Loser")
            setGameOver(true)
        }
        
        setLives(lives-1) //Take away an attempt.
   }
   
//    This should be displayed on the interface
    return(
    <>
        <div className = "box">
            <h2>{message}</h2>

            {gameOver == false &&
            <>
                <div className = "layout">
                    {/* onChange function takes input as setGuess. */}
                    <input type = "number" className = "input-guess" onChange={(event)=>{setGuess(parseInt(event.target.value))}}/> 
                    {/*Checks for the correct answer when the button is clicked*/}    
                    <button onClick = {MakeGuess} className = "guess-button">
                        <strong>GUESS</strong>
                    </button>
                    <h4>Lives: {lives}</h4>
                </div>
            </>
            }

            {/*Will run when all lives run out or when user input has the right answer*/}
            {gameOver == true &&
                <button onClick = {Reset} className = "guess-button">
                    <strong>RESET</strong>
                </button>
            }

        </div>
        
    </>
   );



}

export default RandomNum;
