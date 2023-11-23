import logo from './logo.svg';
import './App.css';
import Calculator from './calculator.js' //imports the function needed

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator/> {/*rendering the function*/}
      </header>
    </div>
  );
}

export default App;
