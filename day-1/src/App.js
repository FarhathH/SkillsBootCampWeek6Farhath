import logo from './logo.svg';
import './App.css';
import RandomNum from './guess.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <RandomNum max = {10}/> {/**/}
      </header>
    </div>
  );
}

export default App;
