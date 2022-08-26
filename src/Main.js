import React from "react"
import memesData from "./memesData.js"

export default function Main(){
        const [meme,setMeme]=React.useState({
        topText:"",
         bottomText:"",
          randomImage:"http://i.imgflip.com/1bij.jpg",
        
    })
    const [allMemeImages,setaAllMemeImages]=React.useState(memesData)
    //important work to understand 
    const  [memeImage,setImage]=React.useState("")
    
        //Get input value
    const [toptext, setToptext] = React.useState('')
    const handleChange = event => {setToptext(event.target.value)}
    const [botomtext, setBotomtexttext] = React.useState('')
    const handleChange2 = event => {setBotomtexttext(event.target.value)}
    
    
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
     const url=memesArray[randomNumber].url
        setMeme(prevmeme=>({...meme, randomImage:url}))
        setToptext("")
        setBotomtexttext("")
        
    }
    

    
    return(
        <main>
        <div className="main-class">
        
        <input className="m-input1" type="text" placeholder="Top text" 
        onChange={handleChange} value={toptext}/>
        <input className="m-input2" type="text"  placeholder="Bottom text"
        onChange={handleChange2} value={botomtext}/>
        
        <button className="m-button" type="button" onClick={getMemeImage}>Get a new meme image 🖼
</button>
        <img className="m-image" src={meme.randomImage}/>
        <h1 className="top-text">{toptext}</h1>
        <h1 className="bottom-text">{botomtext}</h1>
        </div>
     
        </main>
    )}