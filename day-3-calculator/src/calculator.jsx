import React from "react"; //importing framework
//importing other functions to be used
import {CalculatorDisplay} from './calculatorDisplay';
import {CalculatorButton} from './calculatorButton';

export const Calculator = () => {
    return(
        <>
        
        <CalculatorDisplay input = {23} result = {23}/>
        
        <CalculatorButton/>
            
            
        </>
    );
}