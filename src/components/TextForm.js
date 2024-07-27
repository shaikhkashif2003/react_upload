import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handleUpClick = () =>{
        // console.log("Uppercase Was Clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper case", "success")
    }
    const handleloClick = () =>{
        // console.log("Lowercase Was Clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower case", "success") 
    }
    const handleclearClick = () =>{
        // console.log("Lowercase Was Clicked")
        let newText =('');
        setText(newText)
        props.showAlert("Cleared", "success") 
    }
    const handleOnChange = (event) =>{
        // console.log("on change")
        setText(event.target.value)
    }

    const handleCopy =() => {                           // Creating function to copy text
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success")
    }

    const ExtraSpace =() => {                           //Creating function to Remove Extra Space 
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Space", "success")
    }

    
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black' }} >
        <div>
            <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black' }} id="myBox" rows="8" ></textarea>
        </div>
        <div className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</div>
        <div className="btn btn-primary mx-1" onClick={handleloClick} >Convert to Lowercase</div>
        <div className="btn btn-primary mx-1" onClick={handleclearClick} >Clear text</div>
        <div className="btn btn-primary mx-1" onClick={handleCopy} >Copy text</div>
        <div className="btn btn-primary mx-1" onClick={ExtraSpace} >Remove Extra Space</div>
        </div>
        </div> 

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black' }} >
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>

            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the above text box to preview it here"}</p>
        </div>
    </>
  )
}

