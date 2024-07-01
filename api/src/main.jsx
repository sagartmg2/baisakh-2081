import React from "react"
import ReactDOM from "react-dom/client"

import Member from "./Member.jsx"
import ProductSearch from "./ProductSearch.jsx"
import TodoList from "./TodoList.jsx"

{
    /* <React.StrictMode> */
}
ReactDOM.createRoot(document.getElementById("root")).render(
    <>
      <TodoList/>
        {/* <ProductSearch/> */}
        {/* <Member/> */}
    </>
)
{
    /* </React.StrictMode>, */
}
