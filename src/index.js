//entry point to react 
import React from "react";
import ReactDOM  from "react-dom";
import './index.css'
import App from './App'

//takes in 2 arguments: HTML code and HTML element 
//display the sepcified HTML code inside the specified HTML element
ReactDOM.render(
    //adds additional checks and warnings
    <React.StrictMode>    
        <App />
    </React.StrictMode>, 
    document.getElementById('root')
) //where do we want to put the react component (in the root main div)


