import {
  createBrowserRouter,
} from "react-router-dom";
import LayOut from "../LayOuts/LayOut";
import Error from "../Pages/Error";
import Membership from "../Pages/Membership/Membership";
import Notification from "../Pages/Notifications/Notification";
import JoinUs from "../Pages/JoinUs/JoinUs";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/", 
        element: <Home></Home>
      },
      {
        path: "/membership",
        element: <Membership></Membership>
      },
      {
        path: "/notification",
        element: <Notification></Notification>
      },
      {
        path: "/joinus",
        element: <JoinUs></JoinUs>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

export default router;