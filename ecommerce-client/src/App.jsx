import Home from "./pages/Home"
import Login from "./pages/Login"

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom"
import Signup from "./pages/Signup"

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
            element: <Signup/>,
        },
        {
            path: "cart",
            element: <div>Cart page</div>,
        },
    ])
    return <RouterProvider router={router} />
}

export default App
