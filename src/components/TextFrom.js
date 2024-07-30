import React, { useState } from 'react';

export default function TextFrom(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text is Cleared","success")
    }

    const handleSpaceClick = () => {
        let newText = removeExtraSpaces(text);
        setText(newText);
        props.showAlert("Extra Space has been removed","success")
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                props.showAlert("Text is Copied","success")
            })
            .catch(err => {
                props.showAlert("Could Not copy ","warning")
            });
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const removeExtraSpaces = (text) => {
        let words = text.split(' ');
        let filteredWords = words.filter(word => word.length > 0);
        return filteredWords.join(' ');
    }

    const ReverseonClick=()=>{
        let reversedText = text.split('').reverse().join('');
        setText(reversedText);
        props.showAlert("String is Reversed","success")

    }

    const [text, setText] = useState('');

    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#2c2f33':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-primary mx-1' onClick={handleSpaceClick}>Remove Extra Spaces</button>
                <button className='btn btn-primary mx-1' onClick={ReverseonClick}>Reversing the string</button>
                <button className='btn btn-primary mx-1' onClick={handleCopyClick}>Copy Text</button>
            </div>
            <div className='container my-3'>
                <h2 style={{color:props.mode==='dark'?'white':'black'}}>Your Text Summary</h2>
                <p style={{color:props.mode==='dark'?'white':'black'}}><b>{text.split(/\s+/).filter((word) => word.length !== 0).length} Words, {text.length} characters</b></p>
                <p style={{color:props.mode==='dark'?'white':'black'}}><b>{0.008 * text.split(/\s+/).filter((word) => word.length !== 0).length} Minutes Read</b></p>
                <h2 style={{color:props.mode==='dark'?'white':'black'}}>Preview</h2>
                <p style={{color:props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter something to preview"}</p>
            </div>
        </>
    );
}
