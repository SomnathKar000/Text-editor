import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("light");
  const handleOnChange = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#252f3f";
      document.body.style.color = "white";
      showAlert("Dark mode is enabled", "success ");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode is enabled", "success ");
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title="SOMNATH" mode={mode} handleOnChange={handleOnChange} />
      <Alert alert={alert} />
      <TextForm
        title="Enter your text here"
        mode={mode}
        showAlert={showAlert}
      />
      {/* <Routes>
          <Route
            path="/"
            element={
              <TextForm
                title="Enter your text here"
                mode={mode}
                showAlert={showAlert}
              />
            } */}
      {/* // ></Route> */}
      {/* <Route path="/about" element={<About mode={mode} />}></Route> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
