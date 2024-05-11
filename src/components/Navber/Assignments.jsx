import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

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
    if (email !== user?.email) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This assignment is not posted by you!",
      });
    }
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
          console.log(res.data.deletedCount);
          // After successful deletion, update data
          getData();
        }
      } catch (error) {
        console.error("Error deleting assignment:", error);
      }
    });
  };

  return (
    <div>
      <div>
        <details className="dropdown">
          <summary className="m-1 btn">Filter</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1]  bg-base-100 rounded-box w-52">
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
      <div className="grid grid-cols-3 gap-5">
        {filteredAssignments.map((i) => (
          <div key={i._id} className="card w-96 bg-base-100 border shadow-xl">
            <figure>
              <img src={i.assignmentThumbnail} alt="thumbnail" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{i.assignmentTitle} </h2>
              <p>{i.level} </p>
              <p>Mark: {i.assignmentMark} </p>
              <button
                onClick={() => handleDelete(i._id, i.ownerEmail)}
                className="btn btn-error"
              >
                Delete
              </button>
              <Link to={`/updateAssignment/${i._id}`}>
                <button className="btn btn-secondary">Update</button>
              </Link>
              <div className="card-actions justify-end">
                <Link to={`/viewDetails/${i._id}`}>
                  <button className="btn btn-primary">
                    view Assignment datils
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
