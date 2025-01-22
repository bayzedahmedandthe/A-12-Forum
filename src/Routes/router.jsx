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
import Dashboard from "../Pages/Dashboard";
import MyProfile from "../Components/MyProfile";
import MyPosts from "../Components/MyPosts";
import AddPost from "../Components/AddPost";
import PrivetRoute from "./PrivetRoute";


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
  {
    path: "dashboard",
    element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
    children: [
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>
      },
      {
        path: "myPosts",
        element: <MyPosts></MyPosts>
      },
      {
        path: "addPost",
        element: <AddPost></AddPost>
      }
    ]
  }
]);

export default router;