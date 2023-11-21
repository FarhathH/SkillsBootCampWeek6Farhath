import './socialMedia.css'; //importing the stylesheet I made

//Made functional component to displaying intro
function User(){
    return( //html below displays info about user
        <div className = "page">
            <div className = "img"><img src = "koala.jpg" className = "img2"></img></div>
            
            <div className = "info">
                <p className = "chunk2">Name: Pepito</p>
                <p className = "chunk">Age: 35</p>
                <p className = "chunk">Profession: Gaming Streamer</p>
            </div>
        </div>
    );
}
export default User; //should allow function to be displayed on framework