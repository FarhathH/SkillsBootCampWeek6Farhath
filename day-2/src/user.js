import './socialMedia.css'; //importing the stylesheet I made
import {useState} from 'react';






//Made functional component to displaying intro
function User(props){

    //useState objects to placehold
    const[name, setName] = useState(props.name);
    const[age, setAge] = useState(props.age);
    const[profession, setProfession] = useState(props.profession);
    const[pic, setPic] = useState(props.pic);
    const[buttonMessage, setButtonMessage] = useState("SEND FRIEND REQUEST");
    const[newButtonBackground, setButtonBackground] = useState("black");
    const[buttonFont, setButtonFont] = useState("white");

    let onClick = false;

    //this triggers when user clicks the button
   function buttonClick(){
           if(onClick = true){
                setButtonMessage("FRIEND REQUEST SENT")
                setButtonBackground("white")
                setButtonFont("black")
           }
        }
   
    
    return( //html below displays info about user
        <div className = "page">
            <div className = "img"><img src = {pic} className = "img2"></img></div>
            
            <div className = "info"> {/*contains info about user with placeholders*/}
                <p className = "chunk2">Name: {name} </p>
                <p className = "chunk">Age: {age} </p>
                <p className = "chunk">Profession: {profession} </p>
            </div>
            {/*This will*/}
            <div class = "piece"><button onClick = {buttonClick} style = {{backgroundColor:newButtonBackground, color:buttonFont}} className = "btn">{buttonMessage}</button></div> {/*Just a button*/}
        </div>
    );
}
export default User; //should allow function to be displayed on framework