import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Authentication/Register";
import SharedLayout from "../layouts/SharedLayout";
import Login from "../pages/Authentication/Login";
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import JobsDetailsSingle from "../pages/Home/JobsDetailsSingle";
import PrivateRouters from "./PrivateRouters";


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ],
    },
    {
        path: '/',
        element: <SharedLayout></SharedLayout>,
        children: [
            {
                path: '/',
                element: <AuthenticationLayout></AuthenticationLayout>
            },
            {
                path: 'auth/register',
                element: <Register></Register>
            },
            {
                path: 'auth/login',
                element: <Login></Login>
            },
            {
                path: '/jobs/:id',
                element: <PrivateRouters><JobsDetailsSingle></JobsDetailsSingle></PrivateRouters>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)

            },

        ]
    }
])

export default router;