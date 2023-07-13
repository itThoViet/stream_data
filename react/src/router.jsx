import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import MainDashboard from "./views/guestViews/mainDashboard";
import InfoWorkers from "./views/guestViews/infoWorkers";

const router = createBrowserRouter([

  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: "/trang-chu",
        element: <MainDashboard/>

      },
      {
        path: "/thong-tin-tho",
        element: <InfoWorkers />

      },
    ]
  },
  {
    path: 'login',
    element: <Login />
  },


])
export default router;
