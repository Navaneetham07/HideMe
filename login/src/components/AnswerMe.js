import React from "react";
import '../assets/style.css'

const Question=({userName,password})=>(
    <div> 
    <center className="user"> Hi {userName} !</center>
<br></br>
    <button onClick={password} className='playBtn'>Answer Me</button>
    </div>
);
export default Question;

