import './calculator.css'

//gives us the layout of the calculator.
export default function Calculator(){
    return(
        <div className = "calc-container">
            <div className="calc-space">
                <div className="calc-display"></div>
            </div>
            <div className="calc-operators">
                <button className='buttons'></button>
                <button className='buttons'></button>
                <button className='buttons'></button>
                <button className='buttons'></button>
            </div>
            <div className="calc-numbers">
                <button className='num-buttons'></button>
                <button className='num-buttons'></button>
                <button className='num-buttons'></button>
            </div>
            <div className="calc-numbers">
                <button className='num-buttons'></button>
                <button className='num-buttons'></button>
                <button className='num-buttons'></button>
            </div>
            <div className="calc-numbers">
                <button className='num-buttons'></button>
                <button className='num-buttons'></button>
                <button className='num-buttons'></button>
            </div>
            <div className="calc-numbers">
                <button className='num-buttons'></button>
                <button className='num-buttons'></button>
                <button className='num-buttons'></button>
            </div>
            
        </div>
    );
}

