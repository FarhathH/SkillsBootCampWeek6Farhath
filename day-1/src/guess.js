import './guess.css';
import {useState} from 'react';




function RandomNum(props){
   
    // useState variable to use for checking condition
    const[guess, setGuess] = useState("")
    const[answer, setAnswer] = useState(5)
    const[message, setMessage] = useState("Guess the number between 1 and 10")  
    const[lives, setLives] = useState(3)
    const[gameOver, setGameOver] = useState(false)
    const[youWin, setYouWin] = useState(false)
    const[messageColour, setMessageColour] = useState("white")

    //function to randomly generate new answer.
    function GetRandomNumber(max){
        Math.floor(Math.random()* props.max)
    }
    
    
    //This function will reset the details and layout again for another try.
    function Reset(){
        setGameOver(false)
        setLives(3)
        setMessage("Guess the number between 1 and 10")
        setMessageColour("white")
        setAnswer(GetRandomNumber(10))
    }

    // This should change the message based on input from user.
    function MakeGuess(){
        
        // The colour change indicates how close the user is to the answer.
        if(Math.abs(guess-answer)<= 2){
            setMessageColour("orange")
        }
        else if(Math.abs(guess-answer)>2){
            setMessageColour("red")
        }

        if(guess == answer){ //For the correct answer
            setMessage("You got it")
            setGameOver(true)
            setMessageColour("green")
        }
        else if(guess>answer && lives>0){
            setMessage("Too high")
        }
        else if(guess<answer && lives>0){
            setMessage("Too low") 
        }
        else if(lives == 0){ //Will trigger the game over screen.
            setMessage("Loser")
            setGameOver(true)
        }
        
        setLives(lives-1) //Take away an attempt.
   }
   
//    This should be displayed on the interface
    return(
    <>
        <div className = "box">
            <h2 style = {{color:messageColour}}>{message}</h2>
            <h4>Lives: {lives}</h4>
            {/*Disappears when gameOver bool is no longer false.*/}
            {gameOver == false &&
            <>
                <div className = "layout">
                    {/* onChange function takes input as setGuess. */}
                    <input type = "number" className = "input-guess" onChange={(event)=>{setGuess(parseInt(event.target.value))}}/> 
                    {/*Checks for the correct answer when the button is clicked*/}    
                    <button onClick = {MakeGuess} className = "guess-button">
                        <strong>GUESS</strong>
                    </button>
                    
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
