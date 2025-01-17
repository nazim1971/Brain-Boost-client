import { Link, NavLink, useNavigate } from "react-router-dom";
import "animate.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { TiThMenu } from "react-icons/ti";
import { IoDiamond } from "react-icons/io5";
import axios from "axios";
import calculatePoints from "./Point Section/calculatePoints";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch();
  };

  const menu = (
    <>
      <li>
        {" "}
        <NavLink to="/"> Home </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/assignments">All  Assignments </NavLink>{" "}
      </li>
      

      {user && (
        <li>
          {" "}
          <NavLink to="/addAssignments">Add Assignments </NavLink>{" "}
        </li>
      )}
      {user && (
        <li>
          {" "}
          <NavLink to="/pendingAssignments">Pending Assignments </NavLink>{" "}
        </li>
      )}
    </>
  );

  // dark and light mode
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("light");
    return storedTheme || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  //Point section
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        if (user && user.email) {
          const response = await axios(`${import.meta.env.VITE_API_URL}/getCompletedAssignments/${user.email}`, { withCredentials: true });
          setAssignments(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };
  
    fetchAssignments();
  }, [user]);

  const totalPoints = calculatePoints(assignments);

  return (
    <div>
      <div className="navbar border-b bg-base-100">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl">
            {" "}
            <img
              className="h-12 w-12  animate__animated animate__pulse  animate__infinite"
              src="https://i.ibb.co/GJg1fYZ/Brain-boost-removebg-preview.png"
              alt="website-logo"
            />{" "}
            <a>
              Brain
              <span className="text-rose-500">-Boost</span>
            </a>
          </Link>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end">
          <label className="lg:swap hidden  mr-4 lg:swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input onChange={handleToggle} type="checkbox" value="synthwave" />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <div className="dropdown dropdown-end z-30">
            {user ? (
              <div className="text-rose-500">
                <div tabIndex={0} role="button" className=" avatar">
                  <div className="w-14 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        (user && user?.photoURL) ||
                        "https://i.ibb.co/VHD1J6g/user-profile-icon-free-vector.jpg"
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <label className="flex justify-center lg:hidden cursor-pointer gap-2">
                      <input
                        type="checkbox"
                        value="dark"
                        className="toggle theme-controller"
                      />
                    </label>
                  </li>
                  <li>
                    <a href=""><IoDiamond className="text-2xl text-sky-500" />  <span className="text-sky-500 font-bold "> {totalPoints} </span> </a>
                  </li>
                  <li>
                    <NavLink to="/editProfile">Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to='/attemptAssignment'> Attempt assignment </NavLink>
                  </li>
                  <a className="lg:hidden">{menu}</a>
                  <li>{user && <a onClick={handleSignOut}>Logout</a>}</li>
                </ul>
              </div>
            ) : (
              <div >
                <div tabIndex={0} role="button">
                  <TiThMenu className="text-rose-500 text-2xl" />
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {user && (
                    <li>
                      <NavLink>Profile</NavLink>
                    </li>
                  )}
                  <li>
                  <label className="flex justify-center lg:hidden cursor-pointer gap-2">
                      <input
                        type="checkbox"
                        value="dark"
                        className="toggle theme-controller"
                      />
                    </label>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <a className="lg:hidden">{menu}</a>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
