// import logo from "./logo.svg";
import "./App.css";
import "./components/NavBar";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";
import {
  createBrowserRouter,
  RouterProvider,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [switchBtn, setSwitchBtn] = useState("Light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
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
    <>
      <Rounter>
        {/* <NavBar title="ReactJS" /> */}
        <NavBar
          title="TextUtils"
          mode={mode}
          toogleMode={toogleMode}
          switchBtn={switchBtn}
        />
        <Alert alert={alert} />
        <Switch>
          <Route path="/textform">
            <TextForm
              heading="Welcome to Text Utils"
              deftext="Enter lowercase letters"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
          <Route path="/">
            <TextForm
              heading="Welcome to Text Utils"
              deftext="Enter lowercase letters"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
        </Switch>
      </Rounter>
    </>
  );
}

export default App;
