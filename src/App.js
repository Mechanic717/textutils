import React, { useState } from 'react';
import './App.css';
import TextFrom from './components/TextFrom';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.classList.add('dark-mode');
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.classList.remove('dark-mode');
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextFrom showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
