import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import MainDashboard from "./views/guestViews/mainDashboard";
import InfoWorkers from "./views/guestViews/infoWorkers";
import SearchCustomer from "./views/guestViews/searchCustomer";

const router = createBrowserRouter([

  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <MainDashboard/>

      },
      {
        path: "/thong-tin-tho",
        element: <InfoWorkers />

      },
      {
        path: "/tim-kiem-khach-hang",
        element: <SearchCustomer/>

      },
    ]
  },
  {
    path: 'login',
    element: <Login />
  },


])
export default router;
