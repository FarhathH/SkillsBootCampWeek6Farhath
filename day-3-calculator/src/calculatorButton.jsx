import React from "react";

//responsible for the calculator buttons to input numbers
export const CalculatorButton = ({value, onClick}) => {
   return(
    <>
        <button onClick={() =>onClick(value)}>{value}</button>
    </>
   );
}