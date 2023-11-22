import React from "react";

export const CalculatorDisplay = ({input, result}) => {
    return( //executes the visual info display in numerals
        <>
            <div>
                <input className = "display" type = "text" value = {input} readOnly/>
                <div>{result}</div>
            </div>
        </>
    );
}