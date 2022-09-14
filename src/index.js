import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.scss';
import App from './App';
import { useState } from "react";
import reportWebVitals from './reportWebVitals';

/* const coldStyle = {
  backgroundColor: "DodgerBlue",
};
const coolStyle = {
  backgroundColor: "Blue",
};
const warmStyle = {
  backgroundColor: "yellow",
};
const hotStyle = {
  backgroundColor: "orange",
};

if ( {temp} > -30 ) {
  DodgerBlue
} */

const frameColors = ['blue', 'aliceblue', 'yellow', 'orange']


function handleClick() {
  
}

/*  const handleClick = event => {
  event.currentTarget.classList.toggle('colorvarH')
  
}  */



function Templvl () {
  const [temp, setTemp] = useState(0);
  const [temperatureColor, setTempColor] = useState("colorvarC");

  const setTempup = () => {
    if (temp === 45) return;
    const newTemp = temp + 1;

    setTemp(newTemp);
    if (newTemp >= 15) {
      setTempColor("colorvarH");
    }
    if (newTemp < 15) {
      setTempColor("colorvarWarm")
    }
  }

  const setTempdown = () => {
    const newTemp = temp - 1;

    setTemp(newTemp);
    if (newTemp < 0) {
      setTempColor("colorvarCool");
    }
    if (newTemp < -10) {
      setTempColor("colorvarC");
    }
  }

  // const [frameColors] = ['blue', 'aliceblue', 'yellow', 'orange'style={frameColors [2]}]

return (
  <>
  <div className={`frame ${temperatureColor}`} onClick={handleClick}>
  <h1 className='display'>{temp}°C</h1>
  <div className='btns'>
    <button onClick={setTempup}>+</button>
    <button onClick={setTempdown}>-</button>
  </div>
  
  </div>
  </>
)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Templvl />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
