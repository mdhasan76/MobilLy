import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddProduct from "../pages/addProduct/AddProduct";
import Blog from "../pages/blog/Blog";
import Error404 from "../pages/error404/Error404";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Category from "../pages/product_category/Category";
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
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
                element: <Category />
            },
            {
                path: '/addproduct',
                element: <AddProduct />
            }
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