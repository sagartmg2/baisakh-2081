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
import RootLayout from "./components/RootLayout"
import { useState } from "react"

function App() {
    const [user, setUser] = useState(null)

    const router = createBrowserRouter([
        {
            path: "",
            element: <RootLayout user={user} setUser={setUser}/>,
            children: [
                {
                    path: "/",
                    element: <Home  />,
                },
                {
                    path: "login",
                    element: <Login setUser={setUser} />,
                },
                {
                    path: "signup",
                    element: <Signup />,
                },
                {
                    path: "cart",
                    element: <div>Cart page</div>,
                },
                {
                    path: "products",
                    children: [
                        {
                            path: "",
                            element: <div>products page</div>,
                        },
                        {
                            path: "add",
                            element: <div>add product page</div>,
                        },
                    ],
                },
            ],
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
