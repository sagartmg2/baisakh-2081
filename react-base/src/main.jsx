import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Projects from "./Projects"
import Users from "./Users"
import Products from "./Products"

/* 
    function =  Component
    parameters = props
*/

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Products/>
        <Users/>
        <Projects />
    </React.StrictMode>
)
