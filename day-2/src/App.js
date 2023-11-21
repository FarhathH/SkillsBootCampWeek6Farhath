import logo from './logo.svg';
import './App.css';
import User from './user.js'; //this allows the app page to take the function
import {useState} from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <User name = {"Penni the Dancing Cholo"} age = {45} profession = {"Streamer"} pic = {'koala.jpg'}/> {/*rendering the function*/}
        <User name = {"Mookie Pendejo"} age = {36} profession = {"Cartoon character"} pic = {'sr-pelo-google-form.jpg'}/> {/*rendering the function*/}
        <User name = {"Crawl Anderson"} age = {19} profession = {"Edgelord"} pic = {'crawling.jpg'}/> {/*rendering the function*/}
      </header>
    </div>
  );
}

export default App;
