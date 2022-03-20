import React, {useState} from 'react';
import './TextForm.css'; 

export default function TextForm(props) {
    const[text,setText]=useState('');

    const handleUpClick=(event)=> {
        console.log("Text to uppercase");
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=> {
       console.log("Typed something"); 
       setText(event.target.value); 
    }
    const handleLoClick=(event)=> {
 console.log("Text to Lowercase");
 let newText=text.toLowerCase();
  setText(newText);
    }
    const handleClearClick=()=> {
        console.log("Clearing Text");
        setText("");
    }
   return   (
       <>
   <div className="container">

<div className="mb-3 my-3" >
  {/*<label for="exampleFormControlTextarea1" class="form-label">{props.title}</label>  */} 
  <h2>{props.title}</h2>
  <textarea className="form-control" id="my-box" onChange={handleOnChange} rows="8" value={text}></textarea>
</div>
<button className="btn btn-success mx-3 my-3" onClick={handleUpClick}>Convert To Uppercase</button>
<button className="btn btn-danger mx-3 my-3" onClick={handleLoClick}>Convert To Lowercase</button>
<button className="btn btn-warning mx-3 my-3" onClick={handleClearClick}>Clear Text</button>
</div> 
<div className="container my-4">
    <h3>Your Text Summary</h3>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} minutes read</p>
    <h3>Preview</h3>
    <p>{text}</p>
</div>
   </> 
   )
}

