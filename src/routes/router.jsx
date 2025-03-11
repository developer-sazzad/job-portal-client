import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            
        ]
    }
])

export default router;