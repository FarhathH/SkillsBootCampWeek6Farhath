import logo from './logo.svg';
import './App.css';
import RandomNum from './guess.js';
import {useState} from 'react';

function App() {

  const[colours, setColours]=useState(["pink", "blue", "green"]) //useState array for different colours

  return (
    <div className="App">
      <header className="App-header">
        {colours.map((col)=>{
          return(
            <RandomNum col = {col} answer={10} lives = {5}/> //passing in different colours each iteration
          );
        })}
       
      </header>
    </div>
  );
}

export default App;
