import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
])

export default routes;