import { createBrowserRouter } from "react-router-dom";
import DashboardLay from "../layout/DashboardLay";
import Main from "../layout/Main";
import AddProduct from "../pages/addProduct/AddProduct";
import Blog from "../pages/blog/Blog";
import AllBuyers from "../pages/dashboard/admin/AllBuyers";
import AllSellers from "../pages/dashboard/admin/AllSellers";
import ReportItems from "../pages/dashboard/admin/ReportItems";
import MyOrders from "../pages/dashboard/buyer/MyOrders";
import Dashboard from "../pages/dashboard/Dashboard";
import MyProducts from "../pages/dashboard/seller/MyProducts";
import Error404 from "../pages/error404/Error404";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Category from "../pages/product_category/Category";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from '../shared/PrivateRoute'

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
                element: <PrivateRoute><Category /></PrivateRoute>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLay /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/allseller',
                element: <AllSellers />
            },
            {
                path: '/dashboard/allbuyer',
                element: <AllBuyers />
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders />
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct />
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts />
            },
            {
                path: '/dashboard/reporteditems',
                element: <ReportItems />
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