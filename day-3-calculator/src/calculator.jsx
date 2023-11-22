import React from "react"; //importing framework
//importing other
import {CalculatorDisplay} from './calculatorDisplay';
import {CalculatorButton} from './calculatorButton';

export const Calculator = () => {
    return(
        <>
        
        <CalculatorDisplay/>
        
        <CalculatorButton/>
            <div>Calculator</div>
            
        </>
    );
}