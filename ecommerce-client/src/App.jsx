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
import SellerLayout from "./components/SellerLayout"
import axios from "axios"
import { setReduxUser } from "./redux/slices/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { SELLER } from "./constants/role"
import Dashboard from "./pages/seller/Dashboard"
import Products from "./pages/seller/Products"
import ProductsUpsert from "./pages/seller/ProductsUpsert.jsx"
import PageNotFound from "./pages/PageNotFound"

function App() {
    const dispatch = useDispatch()

    const [user, setUser] = useState(null)
    const [isLoading, setisLoading] = useState(
        localStorage.getItem("access_token") ? true : false
    )

    let reduxUser = useSelector((store) => store.user.value)
    let router

    router = createBrowserRouter([
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
                    element: <Cart />,
                },
                {
                    path: "products",
                    children: [
                        {
                            path: "",
                            element: <div>products page</div>,
                        },
                    ],
                },
                {
                    path:"*",
                    element:<PageNotFound/>
                }
            ],
        },
    ])

    if (reduxUser?.role == SELLER) {
        router = createBrowserRouter([
            {
                path: "",
                element: <SellerLayout />,
                children: [
                    {
                        path:"/",
                        element:<Dashboard/>
                    },
                    {
                        path:"dashboard",
                        element:<Dashboard/>
                    },
                    {
                        path:"products",
                        children:[
                            {
                                path:"",
                                element:<Products/>
                            },
                            {
                                path:"add",
                                element:<ProductsUpsert/>
                            },
                            {
                                path:"edit/:slug",
                                element:<ProductsUpsert/>
                            },
                        ]
                       
                    },
                    {
                        path:"*",
                        element:<PageNotFound/>
                    }
                ],
            },
        ])
    }

    useEffect(() => {
        let access_token = localStorage.getItem("access_token")
        if (access_token) {
            axios
                .get(
                    "https://ecommerce-sagartmg2.vercel.app/api/users/get-user",
                    {
                        headers: {
                            Authorization: `Bearer ${access_token} `,
                        },
                    }
                )
                .then((res) => {
                    dispatch(setReduxUser(res.data))
                    setisLoading(false)
                })
                .catch((err) => {
                    localStorage.removeItem("access_token")
                    setisLoading(false)
                })
        } else {
            setisLoading(false)
        }
    }, [])

    if (isLoading) {
        return <>
                <div className="h-[100vh] flex flex-col gap-3 justify-center items-center">
                    <p className="text-primary text-4xl">Hekto</p>
                    <p>loading....</p>
                </div>
        </>
    }

    return (
        <div>
            <RouterProvider router={router} />
            <ToastContainer />
        </div>
    )
}

export default App
