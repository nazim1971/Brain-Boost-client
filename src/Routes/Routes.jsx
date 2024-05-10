import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Login from "../components/SignIn/Login";
import Register from "../components/SignIn/Register";
import ViewPrivate from "../components/Home/ViewPrivate";
import Private from "../components/PrivateRoute/Private";
import EditProfile from "../components/Navber/EditProfile";
import Assignments from "../components/Navber/Assignments";
import Error from "../components/Root/Error";
import AddAssignments from "../components/Navber/AddAssignments";
import PendingAssignments from "../components/Navber/PendingAssignments";
import AttemptAssign from "../components/Navber/AttemptAssign";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <Error/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
       {
        path: '/login',
        element: <Login/>
       },
       {
        path: '/register',
        element: <Register/>
       },
       {
        path: '/assignments',
        element: <Assignments/>
       },
       {
        path: '/addAssignments',
        element: <Private><AddAssignments/></Private>
       },
       {
        path: '/pendingAssignments',
        element: <Private><PendingAssignments/></Private>
       },
       {
        path: '/editProfile',
        element: <Private><EditProfile/></Private>
       },
       {
        path: '/attemptAssignment',
        element: <Private> <AttemptAssign/> </Private>
       }
       ,
       {
        path: '/viewPrivate',
        element: <Private><ViewPrivate/></Private>
       }
      ]
    },
  ]);

export default routes;