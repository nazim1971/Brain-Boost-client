import axios from "axios";
import { useContext, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const UpdateAssignment = () => {
    const singleData = useLoaderData();
    const {_id,assignmentTitle,assignmentDescription,assignmentMark,assignmentThumbnail,level,date} = singleData

    const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(date);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    data.date = startDate;
    data.ownerEmail = user?.email;

    // user cannot seleted previous date
    if (startDate < new Date()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a future date for the deadline!",
      });
      return;
    }

    try {
         await axios.put(
            `${import.meta.env.VITE_API_URL}/updatePost/${_id}`,
            data
          );

      console.log(data);
      reset();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your assignment has been Updated",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/assignments");
    } catch (err) {
      console.log(err);
    }
  };

    return (
        <div>
      <div>
        <section className="max-w-4xl p-6 mx-auto  rounded-md shadow-md bg-base-100">
          <h2 className="text-lg font-semibold t capitalize ">
            Update a Assignment
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label>Assignment Title</label>
                <input
                  id="assignmentTitle"
                  defaultValue={assignmentTitle}
                  type="text"
                  {...register("assignmentTitle", { required: true })}
                  className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label>Assignment Description</label>
                <input
                  id="assignmentDescription"
                  type="text"
                  defaultValue={assignmentDescription}
                  {...register("assignmentDescription", { required: true })}
                  className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label>Assignment Mark</label>
                <input
                  id="assignmentMark"
                  type="number"
                  defaultValue={assignmentMark}
                  {...register("assignmentMark", { required: true })}
                  className="block w-full px-4 py-2 mt-2  border border-rose-200 rounded-md   focus:border-rose-500 focus:ring-rose-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label>Assignment thumbnail</label>
                <input
                  id="assignmentThumbnail"
                  type="text"
                  placeholder="Photo Url"
                  defaultValue={assignmentThumbnail}
                  {...register("assignmentThumbnail", { required: true })}
                  className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label htmlFor="level">Level</label>
                <select
                defaultValue={level}
                  {...register("level", { required: true })}
                  className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label>Deadline</label>
                <label>
                  <ReactDatePicker
                    className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </label>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
        </div>
    );
};

export default UpdateAssignment;