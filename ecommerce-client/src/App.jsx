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
import { useEffect, useState } from "react"
import Cart from "./pages/Cart"

function App() {
    const [user, setUser] = useState(null)
    const [isLoading, setisLoading] = useState(localStorage.getItem(user) ?true : false)

    const router = createBrowserRouter([
        {
            path: "",
            element: <RootLayout user={user} setUser={setUser} />,
            children: [
                {
                    path: "/",
                    element: <Home />,
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
                    element: <Cart/>,
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

    useEffect(() => {
        let user = localStorage.getItem("user")
        if (user) {
            setTimeout(() => {
                setUser(JSON.parse(user))
                setisLoading(false)
            }, 2000)
        } else {
            setisLoading(false)
        }
    }, [])

    if (isLoading) {
        return <>loading.....</>
    }

    return (
        <div>
            
            <RouterProvider router={router} />
            <ToastContainer />
        </div>
    )
}

export default App
