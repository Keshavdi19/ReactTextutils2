import React, { useState } from 'react';

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  }

  const handleClClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);

  }

  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert("Extra spaces removed!", "success");
  };

  // 🟢 NEW FUNCTION — Copy Text
  const handleText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard!", "success");
  };

  const [text, setText] = useState('');

  // 🟢 Punctuation count logic
  const countPunctuations = (txt) => {
    return txt.split('').filter(char => /[!.,?;:'"-]/.test(char)).length;
    
  };

  return (
    <>
      {/* 🌗 Main container */}
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743'
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        {/* 🔹 Buttons */}
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleText}>
          Copy Text
        </button>
      </div>

      {/* 🧾 Summary Section */}
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your text summary</h2>
        <b>
          <p>
            {text.split(" ").filter(e => e.length !== 0).length} words,{" "}
            {text.length} characters,{" "}
            {countPunctuations(text)} punctuations
          </p>
          <p>
            {0.008 * text.split(" ").filter(e => e.length !== 0).length} Minutes read
          </p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
        </b>
      </div>
    </>
  );
}
