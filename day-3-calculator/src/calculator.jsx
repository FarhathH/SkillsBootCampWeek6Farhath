import React from "react"; //importing framework

import * as math  from 'mathjs'; //new library

//importing other functions to be used
import {CalculatorDisplay} from './calculatorDisplay';
import {CalculatorButton} from './calculatorButton';
import {useState} from "react";

export const Calculator = () => {
    //useState variables for display
    const[input, setInput] = useState('');
    const[result, setResult] = useState('');

    const handleClick = (value) =>{
        if(value === '='){
            const newResult = math.evaluate(input)
            setResult(newResult.toString())
        }
        else if(value === 'C'){
            setInput('')
            setResult('')
        }
        else if((value) === 'Del'){
            setInput((prevInput)=>prevInput.slice(0,-1))
        }else{
            setInput((prevInput) => prevInput + value)
        }
        
    }

    return(
        <>
        <div style =  {{color:"black"}}>Calculator</div>

        <CalculatorDisplay input = {input} result = {result}/> {/*rendering the display*/}
        
        {/*displaying calculator buttons row by row*/}
        <div className = "btn-group">
            <div >
                {['1','4','7','/'].map((value)=>{
                    return(
                        <div className = "answer">
                            <CalculatorButton value = {value} onClick={handleClick}/>
                        </div>
                    );
                })};

            </div>

            <div>
                {['2','5','8','*'].map((value)=>{
                    return(
                        <div className = "answer">
                            <CalculatorButton value = {value} onClick={handleClick}/>
                        </div>
                    );
                })};

            </div>

            <div>
                {['3','6','9','-'].map((value)=>{
                    return(
                        <div className="answer">
                            <CalculatorButton value = {value} onClick={handleClick}/>
                        </div>
                    );
                })};

            </div>

            <div>
                {['0','.','=','+'].map((value)=>{
                    return(
                        <div className="answer">
                            <CalculatorButton value = {value} onClick={handleClick}/>
                        </div>
                    );
                })};

            </div>

            <div>
                {['Del','C'].map((value)=>{
                    return(
                        <div className="answer">
                            <CalculatorButton value = {value} onClick={handleClick}/>
                        </div>
                    );
                })};

            </div>
        </div>



        
            
            
        </>
    );
}