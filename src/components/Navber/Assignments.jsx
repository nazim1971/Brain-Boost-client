import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import "animate.css";

const Assignments = () => {


  const { user } = useContext(AuthContext);
  const [allAssignment, setAllAssignment] = useState([]);
  // filter
  const [filterLevel, setFilterLevel] = useState("All");

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/allPost`
      );
      setAllAssignment(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }; 
  // filter data
  const filteredAssignments =
    filterLevel === "All"
      ? allAssignment
      : allAssignment.filter((item) => item.level === filterLevel);

  // delete btn

  const handleDelete = async (id, email) => {

    if(email === user?.email || user?.email === `${import.meta.env.VITE_MAIL}`){
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        try {
          if (result.isConfirmed) {
            const res = await axios.delete(
              `${import.meta.env.VITE_API_URL}/userPost/${id}`
            );
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            // After successful deletion, update data
            getData();
          }
        } catch (error) {
          console.error("Error deleting assignment:", error);
        }
      });
    }
      else{
    return  Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "This assignment is not posted by you!",
    });
    }

  };

  

  return (
    <div className="mb-20 mt-10">
      <div>
        <details className="dropdown ">
          <summary className="m-1 btn btn-ghost animate__animated animate__pulse  animate__infinite"><FaFilter className="text-xl text-red-500 " /></summary>
          <ul className="p-2 shadow border menu dropdown-content z-[1]  bg-base-100 rounded-box w-52">
            <li>
              <a onClick={() => setFilterLevel("Easy")}>Easy</a>
            </li>
            <li>
              <a onClick={() => setFilterLevel("Medium")}>Medium</a>
            </li>
            <li>
              <a onClick={() => setFilterLevel("Hard")}>Hard</a>
            </li>
            <li>
              <a onClick={() => setFilterLevel("All")}>All</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredAssignments.map((i) => (
          <div key={i._id} className="card  bg-base-100 border shadow-xl">
            <figure>
              <img className="h-64 w-full" src={i.assignmentThumbnail} alt="thumbnail" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{i.assignmentTitle} </h2>
              <p>{i.level} </p>
              <p>Mark: {i.assignmentMark} </p>

              <div className="space-x-3">
              <button
                onClick={() => handleDelete(i._id, i.ownerEmail)}
                className="btn bg-red-600 text-white"
              >
                Delete
              </button>
              <Link to={`/updateAssignment/${i._id}`}>
                <button className="btn btn-ghost border-rose-500">Update</button>
              </Link>
              </div>

              <div className="card-actions justify-end">
                <Link to={`/viewDetails/${i._id}`}>
                  <button className="btn btn-ghost ">
                    view  details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}


      </div>
    </div>
  );
};

export default Assignments;
