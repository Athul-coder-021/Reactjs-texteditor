// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';//apne aap aa jata hai agar niche <Navbar/> likde tho.
import Textform from './components/Textform';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// anything inside curly brackets is consiered as JS
// let name= "Athul";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
        setAlert(null)
    }, 1250);
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#121212';
      showAlert("dark mode has been set","success");
      // document.title = "TextUtils-Dark Mode";  can be used to change title
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been set","success");
      // document.title = "TextUtils-Light Mode";   can be used to change title
    }
  }
  return (
    <>
    <Navbar title = "DEVloper" about ="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert ={alert}/>
    <Router>
    <Routes>
    <Route path='/' element={          
        <div className="container my-5">
            <Textform heading="Enter your text here"  mode={mode} showAlert={showAlert}/>
        </div>} />
    <Route path='/about' element={<About />} />

    </Routes>
    </Router>
     {/* <About/>
    <Textform heading="Enter your text here"  mode={mode} showAlert={showAlert}/> */}
    </>
    /*className = Container    ko use karne unordered tharike se exist karne wala format ho jayega ye bootstrap ka hai*/
  );
}
  
export default App;
