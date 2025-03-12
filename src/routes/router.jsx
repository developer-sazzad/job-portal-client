import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Authentication/Register";
import SharedLayout from "../layouts/SharedLayout";
import Login from "../pages/Authentication/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    },
    {
        path: '/',
        element: <SharedLayout></SharedLayout>,
        children: [
            {
                path: 'auth/register',
                element: <Register></Register>
            },
            {
                path: 'auth/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;