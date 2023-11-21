import logo from './logo.svg';
import './App.css';
import User from './user.js'; //this allows the app page to take the function
import {useState} from 'react';


function App() {

  let users = [ //list for iterating objects in map function.
    {
      name:"Penni the Dancing Cholo",
      age:45,
      profession: "Streamer",
      pic:"koala.jpg"
    },

    {
      name:"Mookie Pendejo",
      age: 36,
      profession: "Cartoon character",
      pic:'sr-pelo-google-form.jpg'
    },

    {
      name:"Crawl Anderson",
      age: 19,
      profession:"Edgelord",
      pic:"crawling.jpg"

    },
    {
      name:"Grimace",
      age:52,
      profession:"Mascot",
      pic:"grimace.jpg"
    }
  ]

  

  

  return (
    <div className="App">
      <header className="App-header">
        {users.map((user)=>{

          return(
            <div> {/*rendering of the function*/}
              <User name = {user.name} age = {user.age} profession = {user.profession} pic = {user.pic}/>
            </div>
          );
        })}

        
      </header>
    </div>
  );
}

export default App;
