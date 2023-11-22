import logo from './logo.svg';
import './App.css';
import './calculator.css' //stylesheet
import {Calculator} from './calculator'; //allowing us call the function

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Calculator</div>
        <div className = "cal">
        
        <Calculator/> {/*rendering the function*/}
        </div>
      </header>
    </div>
  );
}

export default App;
