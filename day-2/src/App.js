import logo from './logo.svg';
import './App.css';
import User from './user.js'; //this allows the app page to take the function

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <User/> {/*rendering the function*/}
      </header>
    </div>
  );
}

export default App;
