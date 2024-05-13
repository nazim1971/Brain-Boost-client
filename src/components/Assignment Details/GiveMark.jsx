import axios from "axios";
import { useForm } from "react-hook-form";
import Iframe from "react-iframe";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const GiveMark = () => {
  const submitedAssign = useLoaderData();
  const { assignmentNote, assignmentDoc, _id ,mark} = submitedAssign;


  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    data.status = "Complete"
    if( parseInt(data.finalMark) > parseInt(mark) ) {
        return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You can not give more then total mark !",
          });
    }
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/updatePending/${_id}`, data, {withCredentials: true});

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
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-5 my-20">
      <div>
      <div className="grid  grid-cols-1 gap-5">
      <div className="p-5 shadow-xl border rounded-xl space-y-5">
      <h1 className="text-2xl underline text-rose-500 font-semibold">Total Mark: {mark} </h1>
      <h1 className=" "> {assignmentNote} </h1>
      </div>
       <iframe className="w-full border rounded-2xl mx-auto" src={assignmentDoc}  height="400"></iframe>
      

      
      </div>
      </div>

      <div className="">
        <section className="border  p-6 mx-auto shadow-2xl rounded-2xl   bg-base-100">
          <button className="font-semibold mb-3 underline ">Feedback</button>
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
