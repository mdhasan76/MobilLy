import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/blog/Blog";
import Error404 from "../pages/error404/Error404";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blog />
            },
        ]
    },

    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <SignUp />
    },
    {
        path: '/*',
        element: <Error404 />
    }
])