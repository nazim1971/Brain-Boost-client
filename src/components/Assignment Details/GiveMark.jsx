import axios from "axios";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const GiveMark = () => {
  const submitedAssign = useLoaderData();
  const { assignmentNote, assignmentDoc, _id ,mark} = submitedAssign;


  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    data.status = "Complete"
    if(data.finalMark > mark ) {
        return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You can not give more then total mark !",
          });
    }
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/updatePending/${_id}`, data);

      console.log(data);
      reset();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your assignment has been posted",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/assignments");
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="gird grid-cols-2">
      <div>
      <h1 className="p-5 w-1/2">Note: {assignmentNote} </h1>
      {/* <h1> Doc/PDF: {assignmentDoc} </h1> */}
      <iframe className="w-full md:w-[70%] mx-auto" src={assignmentDoc}  height="400"></iframe>

      <h1>Total Mark: {mark} </h1>
      </div>

      <div>
        <section className="max-w-4xl p-6 mx-auto  rounded-md  bg-base-100">
          <button>Fill the assignment</button>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label>Mark</label>
                <input
                  id="finalMark"
                  type="number"
                  {...register("finalMark", { required: true })}
                  className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label>Feedback</label>
                <input
                  id="feedback"
                  type="text"
                  placeholder="Photo Url"
                  {...register("feedback", { required: true })}
                  className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
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

export default GiveMark;
