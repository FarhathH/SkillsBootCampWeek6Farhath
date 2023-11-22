import React from "react"; //importing framework
//importing other functions to be used
import {CalculatorDisplay} from './calculatorDisplay';
import {CalculatorButton} from './calculatorButton';

export const Calculator = () => {
    return(
        <>
        
        <CalculatorDisplay input = {23} result = {23}/>
        
        {/*displaying calculator buttons row by row*/}
        <div className = "btn-group">
            <div className = "button">
                {['7','8','9','/'].map((value)=>{
                    return(
                        <>
                            <CalculatorButton value = {value} onClick={}/>
                        </>
                    );
                })};

            </div>

            <div className = "button">
                {['4','5','6','*'].map((value)=>{
                    return(
                        <>
                            <CalculatorButton value = {value} onClick={}/>
                        </>
                    );
                })};

            </div>

            <div className = "button">
                {['1','2','3','-'].map((value)=>{
                    return(
                        <>
                            <CalculatorButton value = {value} onClick={}/>
                        </>
                    );
                })};

            </div>

            <div className = "button">
                {['0','.','=','+'].map((value)=>{
                    return(
                        <>
                            <CalculatorButton value = {value} onClick={}/>
                        </>
                    );
                })};

            </div>

            <div className = "button">
                {['Del','C'].map((value)=>{
                    return(
                        <>
                            <CalculatorButton value = {value} onClick={}/>
                        </>
                    );
                })};

            </div>
        </div>



        
            
            
        </>
    );
}