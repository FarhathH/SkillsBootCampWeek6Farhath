import './socialMedia.css'; //importing the stylesheet I made
import {useState} from 'react';






//Made functional component to displaying intro
function User(props){
    const[name, setName] = useState(props.name);
    const[age, setAge] = useState(props.age);
    const[profession, setProfession] = useState(props.profession);
    const[pic, setPic] = useState(props.pic);
  
    
    return( //html below displays info about user
        <div className = "page">
            <div className = "img"><img src = {pic} className = "img2"></img></div>
            
            <div className = "info">
                <p className = "chunk2">Name:{name} </p>
                <p className = "chunk">Age: {age} </p>
                <p className = "chunk">Profession: {profession} </p>
            </div>
        </div>
    );
}
export default User; //should allow function to be displayed on framework