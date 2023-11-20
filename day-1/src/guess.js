import './guess.css';


const TheAnswer = 10;


function Correction(){
    if(TheAnswer == <input/>){
        return(
            <h3>Correct</h3>
        );
    }else{
        return(
            <h3>Try again</h3>
        );
    }
}


function RandomNum(){
   

   return(
    <>
        <h2>Guess the number:</h2>
        <div class = "layout">
            
            <input type = "number" className = "input-guess">
                
            </input>
                
            <button onClick={Correction} className = "guess-button">
                <strong>GUESS</strong>
            </button>
        </div>
        <h3></h3>
    </>
   );

}

export default RandomNum;
