import Home from "./pages/Home"
import Login from "./pages/Login"

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom"

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
            path: "cart",
            element: <div>Cart page</div>,
        },
    ])
    return <RouterProvider router={router} />
}

export default App
