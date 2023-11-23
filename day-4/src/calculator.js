import './calculator.css' //implements the style sheet
import {useState} from 'react'; //allows us to use the useState function
//gives us the layout of the calculator.
export default function Calculator(){ 

    //arrays for the button text.
    const[mathSymbols, setMathSymbols] = useState(["+","-","*","/"]);
    const[firstNumbers, setfirstNumbers] = useState(['9','8','7','6','5','4','3','2','1','0']);
    
    //use for input and results
    const[input, setInput] = useState('');
    const[output, setOutput] = useState('');
    
   
    //executes when the characters length is less than 16
  function handleInput(text){
    if(output.length < 16){
        setOutput(output + text)
    }
  }
   



    return( //this layout is executed when the function is rendered.
        <div className = "calc-container">
            <div className="calc-space">
                <div className="calc-display">
                    <p>{output}</p>
                </div>
            </div>
            <div className="calc-operators">
                {mathSymbols.map((math)=>{
                    return( //iterates the operator buttons
                        <button onClick = {()=>{handleInput(math)}}className='buttons' style={{width:"100%", height:"75%"}}>{math}</button>
                    );
                })}
               
                
            </div>
            <div className="calc-numbers">
                {firstNumbers.map((num)=>{
                    return( //iterates the number buttons
                        //onclick parameter
                        <button onClick = {()=>{handleInput(num)}} className='num-buttons' style = {{width:"33%",height:"25%"}}>{num}</button>
                    );
                })}
                {/*these two buttons will have different onClick functions*/}
               <button onClick = {()=>{{setOutput('')}}} className='num-buttons' style = {{width:"33%",height:"25%"}}>Clear</button>
               <button onClick = {()=> {{setOutput(Function('return ' + output)())}}} className='num-buttons' style = {{width:"33%",height:"25%"}}>=</button>   
            </div>
            
                
            
            
        </div>
    );
}

