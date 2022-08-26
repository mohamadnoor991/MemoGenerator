import React from "react"
import face from "../src/images/troll-face.png"

export default function Header(){
    
    return(
       
        <header>
        <div>
        <img src= {face}/>
        <h1>Meme Generator</h1>
        </div>
        <p>React course - Project 3</p>
        </header>
       
    )
}