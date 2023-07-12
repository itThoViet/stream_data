import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";

const router = createBrowserRouter([
   
    {
        path:'/',
        element:<Dashboard/>
    },
    {
        path:'login',
        element:<Login/>
    },
   
])
export default router;