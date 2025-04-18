import React from "react"
import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import HomePage from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                path:"/",
                element:<HomePage/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Signup/>
            },
        ]
    }
])

export default router