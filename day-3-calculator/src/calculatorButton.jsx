import React from "react";

export const CalculatorButton = ({value, onClick}) => {
   return(
    <>
        <button className = "button" onClick={() =>onClick(value)}>{value}</button>
    </>
   );
}