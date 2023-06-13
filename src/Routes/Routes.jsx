import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import AllClasses from "../Pages/Classes/AllClasses";
import ShowClasses from "../Pages/Classes/ShowClasses";
import DashBoard from "../LayOuts/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../LayOuts/AllUsers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'allusers',
                element: <AllUsers></AllUsers>
            }
        ]
    },
    {
        path: '/classes',
        element: <AllClasses></AllClasses>,
        children: [
            {
                path: '/classes/allclasses',
                element: <ShowClasses></ShowClasses>
            }
        ]
    }

])

export default router;