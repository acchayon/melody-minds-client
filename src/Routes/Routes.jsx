import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }

])

export default router;