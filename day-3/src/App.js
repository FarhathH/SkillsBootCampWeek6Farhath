import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import ColourButton from './Colour';

function App() {

  const[colorRange, setColorRange] = useState(["pink","black", "orange", "blue"]);

  return (
    <div className="App">
      <header className="App-header">
      
       

       <ColourButton/>
      </header>
    </div>
  );
}

export default App;
