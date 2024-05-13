import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Login from "../components/SignIn/Login";
import Register from "../components/SignIn/Register";
import Private from "../components/PrivateRoute/Private";
import EditProfile from "../components/Navber/EditProfile";
import Assignments from "../components/Navber/Assignments";
import Error from "../components/Root/Error";
import AddAssignments from "../components/Navber/AddAssignments";
import PendingAssignments from "../components/Navber/PendingAssignments";
import AttemptAssign from "../components/Navber/AttemptAssign";
import UpdateAssignment from "../components/Home/UpdateAssignment";
import ViewDetails from "../components/Assignment Details/ViewDetails";
import GiveMark from "../components/Assignment Details/GiveMark";
import axios from "axios";
import HowItWorks from "../components/Assignment Details/HowItWorks";

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
        element: <Private><PendingAssignments/></Private>,
        loader: ()=> axios.get(`${import.meta.env.VITE_API_URL}/pending`,{withCredentials: true})
        .then(response => response.data)
        .catch(error => {
          console.error('Error fetching data:', error);
          throw error;
        })
       },
       {
        path: '/giveMarks/:id',
        element: <Private><GiveMark/></Private> ,
        loader: ({params})=> axios.get(`${import.meta.env.VITE_API_URL}/pending/${params.id}`,{withCredentials: true})
        .then(response => response.data)
        .catch(error => {
          console.error('Error fetching data:', error);
          throw error;
        })
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
        path: '/updateAssignment/:id',
        element: <Private><UpdateAssignment/></Private> ,
        loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/onePost/${params.id}`, {credentials: 'include'})
      },
      {
        path: '/viewDetails/:id',
        element: <Private> <ViewDetails/> </Private>,
        loader: ({params})=> axios.get(`${import.meta.env.VITE_API_URL}/onePost/${params.id}`,{withCredentials: true})
        .then(response => response.data)
        .catch(error => {
          console.error('Error fetching data:', error);
          throw error;
        })
      },
      {
        path: '/howItWorks',
        element: <HowItWorks/>
      }
      ]
    },
  ]);

export default routes;