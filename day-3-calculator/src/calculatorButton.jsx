import React from "react";
import {useState} from "react";
//responsible for the calculator buttons to input numbers
export const CalculatorButton = ({value, onClick}) => {
   return(
        <div >
            <button className = "button" onClick={() =>onClick(value)}>{value}</button>
        </div>
   );
}