import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Project from "./Project"

let heading = "My Projects"
let projects = [
    {
        title:"react",
        price:100,
        date:2024
    },
    {
        title:"react1",
        price:100,
        date:2024
    },
    {
        title:"react2",
        price:100,
        date:2024
    },
    {
        title:"react34",
        price:100,
        date:2024
    },
    {
        title:"react4",
        price:100,
        date:2024
    },
]

/* 
    function =  Component
    parameters = props
*/

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <h1 clas="123" id="heading">
            {heading}
        </h1>
        <hr />
        {/* Project("react",1000,"2024") */}
        <Project title="react" price={2000} date={2025} />
        <Project title="git" price={1000} date={2024} />
        <Project title="node" price={3000} date={2024} />
        <Project title="express" price={3000} date={2024} />
        <Project title="mongodb" price={3000} date={2024} />
    </React.StrictMode>
)
