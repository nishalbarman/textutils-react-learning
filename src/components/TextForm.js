import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [spaceCount, setSpace] = useState(0);
  const [words, setWords] = useState(0);

  const getWords = () => {
    let array = text.split(" ");
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
      if (array[index] !== " ") {
        newArray.push(array[index]);
      }
    }
    console.log(array.length);
    return array.length;
  };

  const handleOnClick = () => {
    console.log(text);
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "success");
  };

  const handleCountVowels = () => {
    let count =
      countVowels(text.toLowerCase(), "a") +
      countVowels(text.toLowerCase(), "e") +
      countVowels(text.toLowerCase(), "i") +
      countVowels(text.toLowerCase(), "o") +
      countVowels(text.toLowerCase(), "u");
    setCount(count);
    setSpace(countVowels(text.toLowerCase(), " "));
    props.showAlert(
      "Vowels Counted : " + count + ", Consonent : " + (text.length - count),
      "success"
    );
  };

  const countVowels = (str, letter) => {
    let count = 0;
    for (let index = 0; index < str.length; index++) {
      if (str.charAt(index) === letter) {
        count++;
      }
    }
    return count;
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    setWords(getWords());
  };

  return (
    <>
      <div className="container ">
        <h3
          className="form-label my-3"
          style={props.mode === "light" ? {} : { color: "white" }}>
          {props.heading}
        </h3>
        <textarea
          className="form-control outline"
          id="textArea"
          rows="9"
          placeholder={props.deftext}
          value={text}
          onChange={handleOnChange}
          style={
            props.mode === "light"
              ? {}
              : { color: "white", backgroundColor: "black" }
          }></textarea>
        <div className="btn-contaner">
          <button
            type="button"
            className="btn btn-success my-4 btn-cs btn-left"
            onClick={handleOnClick}
            style={
              props.mode === "light"
                ? {}
                : {
                    color: "white",
                    backgroundColor: "black",
                    border: "1px solid green",
                  }
            }>
            Convert
          </button>

          <button
            type="button"
            className="btn btn-success my-4 btn-cs btn-right"
            onClick={handleCountVowels}
            style={
              props.mode === "light"
                ? {}
                : {
                    color: "white",
                    backgroundColor: "black",
                    border: "1px solid green",
                  }
            }>
            Count Vowels
          </button>
        </div>
      </div>
      {/* <br /> */}
      {/* <br />
      <br />
      <br /> */}
      <div className="container my-1">
        <h4
          className="form-label"
          style={
            props.mode === "light"
              ? {}
              : {
                  color: "white",
                }
          }>
          Your content summery
        </h4>
        <label
          style={
            props.mode === "light"
              ? {}
              : {
                  color: "white",
                }
          }>
          {text === "" ? "0" : text.length} Characters,{" "}
          {text === "" ? "0" : words} Words
        </label>
        <br />
        <label
          style={
            props.mode === "light"
              ? {}
              : {
                  color: "white",
                }
          }>
          Average {text === "" ? "0" : 0.0076 * text.split(" ").length} minutes
          needed to read
        </label>
        <br />
        <label
          style={
            props.mode === "light"
              ? {}
              : {
                  color: "white",
                }
          }>
          Vowels : {count}, Consonents : {text.length - count - spaceCount}
        </label>
        <br />
        <h5
          className="form-label my-2"
          style={
            props.mode === "light"
              ? {}
              : {
                  color: "white",
                }
          }>
          Preview
        </h5>
        <div
          className="codePrev my-2"
          style={
            props.mode === "light"
              ? {}
              : {
                  color: "white",
                  backgroundColor: "black",
                  border: "1px solid white",
                }
          }>
          <code>{text}</code>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = { heading: PropTypes.string.isRequired };
