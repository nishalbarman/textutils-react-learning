// import logo from "./logo.svg";
import "./App.css";
import "./components/NavBar";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import AboutUs from "./components/AboutUs";

import React, { useState } from "react";
// This is a React Router v6 app
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [switchBtn, setSwitchBtn] = useState("Light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setSwitchBtn("dark");
      document.body.style.backgroundColor = "#060606";
      showAlert("Dark Mode Enabled", "success");
      setInterval(() => {
        document.title = "TextUtils - Dark Mode";
      }, 2000);

      setInterval(() => {
        document.title = "TextUtils - Home";
      }, 1500);
    } else {
      setMode("light");
      setSwitchBtn("Light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode Disabled", "success");
      setInterval(() => {
        document.title = "TextUtils - Light Mode";
      }, 2000);

      setInterval(() => {
        document.title = "TextUtils - Home";
      }, 1500);
    }
  };

  return (
    <BrowserRouter>
      {/* <NavBar title="ReactJS" /> */}
      <NavBar
        title="TextUtils"
        mode={mode}
        toogleMode={toogleMode}
        switchBtn={switchBtn}
      />
      <Alert alert={alert} />
      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              heading="Welcome to Text Utils"
              deftext="Enter lowercase letters"
              mode={mode}
              showAlert={showAlert}
            />
          }
        />
        <Route
          path="/about"
          element={
            <AboutUs
              accomFirst="An Easy Way To Change Uppercase to Lowercase And Title Capitalization"
              // accomTwo="What is TextUtils"
              // accomThree="React JS"
              mode={mode}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
