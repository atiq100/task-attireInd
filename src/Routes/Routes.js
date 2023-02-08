import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../Pages/About/About";
import NewIn from "../Pages/NewIn/NewIn";
import Shop from "../Pages/Shop/Shop";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>

    },
    {
        path:'/shop',
        element:<Shop></Shop>
    },
    {
        path:'/newIn',
        element:<NewIn></NewIn>
    },
    {
        path:'/about',
        element:<About></About>
    },

])