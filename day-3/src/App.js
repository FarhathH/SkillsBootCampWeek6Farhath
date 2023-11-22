import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import ColourButton from './Colour.js';

function App() {
  //our array to iterate
  const[colorRange, setColorRange] = useState(["pink","black", "orange", "blue"]);

  return (
    <div className="App">
      <header className="App-header">
      
      {/*iterates through the array*/}
      {colorRange.map((col)=>{

          return(
            <ColourButton colourBackground = {col}/>
          );
        })}

       
      </header>
    </div>
  );
}

export default App;
