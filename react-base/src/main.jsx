import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

let title = "Projects compoleted"

/* component  */
function Project(props) {
    console.log("props", props)
    return (
        <div className="project">
            <img src={props.image} />
            <h2>
                {props.title} (RS.{props.price} )
            </h2>
            <p>{props.date}</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                impedit? Repudiandae, expedita inventore velit placeat iure
                dolorum maxime animi sint sed quos cupiditate architecto tempora
                ex labore vero in fuga.
            </p>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <h1>{title}</h1>
        <header id="header" class="header" />
        <hr />
        {/* Product("git",1000,"2024-05-08" ,"")  */}
        <Project
            title="git"
            price="1000"
            date="2024"
            image="https://picsum.photos/200/201"
        />
        <Project
            title="node"
            price="21000"
            date="2024"
            image="https://picsum.photos/200/202"
        />
        <Project
            title="react"
            price="1300"
            date="2024"
            image="https://picsum.photos/200/203"
        />
    </React.StrictMode>
)
