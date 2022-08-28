import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppCase is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to Uppercasr", "success");
  };
  const handlelcClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to Lowercasr", "success");
  };
  const handleSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed", "success");
  };
  const handleCopyClick = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text has been copyed", "success");
  };
  const handleUndoClick = () => {
    // let newText = text.substring(0, text.length - 1);
    let newText = text.slice(0, text.length - 1);
    setText(newText);
  };

  const handleclrClick = () => {
    setText("");
    props.showAlert("Text has been clered", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <div div className="container my-4">
      <div>
        <h1>{props.title}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#252f3f" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handlelcClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleclrClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUndoClick}>
          Undo
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>
          copy
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleSpaceClick}
        >
          Remove extra space
        </button>
      </div>
      <h1 className="container my-4">Your text summery </h1>
      <p>
        {text.length === 0 ? "0" : text.split(" ").length} words and{" "}
        {text.length} characters
      </p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Previev</h2>
      <p>{text}</p>
    </div>
  );
}
