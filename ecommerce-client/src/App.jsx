import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Header from "./components/Header"

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "login",
            element: <Login />,
        },
        {
            path: "signup",
            element: <Signup />,
        },
        {
            path: "cart",
            element: <div>Cart page</div>,
        },
    ])
    return (
        <div>
            <RouterProvider router={router} />
            <ToastContainer />
        </div>
    )
}

export default App
