import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Projects from "./Projects"
import Users from "./Users"
import Products from "./Products"
import Counter, { BigCounter, SmallCounter } from "./Counter"
import TodoList from "./TodoList"
import GoogleTabs from "./GoogleTabs"
import GoogleTabsTwo from "./GoogleTabsTwo"

/* 
    function =  Component
    parameters = props
*/

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GoogleTabs />

        {/* 
        <GoogleTabsTwo/>
        <Counter />
        <TodoList/>
        <Products/>
        <Users/>
        <Projects /> */}
    </React.StrictMode>
)
