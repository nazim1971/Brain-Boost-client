import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { MdOutlineDateRange } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import { FaMarker } from "react-icons/fa";


const ViewDetails = () => {
    const {user} = useContext(AuthContext)
    const viewDetails = useLoaderData();
    const {_id,assignmentTitle,assignmentDescription,assignmentMark,assignmentThumbnail,level,date , ownerEmail} = viewDetails

    
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        data.title= assignmentTitle
        data.mark= assignmentMark
        data.name = user.displayName
        data.status = "pending"
      data.doneUserEmail = user?.email;
      try {
        await axios.post(`${import.meta.env.VITE_API_URL}/doneAssign`, data, {withCredentials: true});
  
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your assignment has been posted",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/pendingAssignments");
      } catch (err) {
        console.log(err);
      }
    };
    // close model
    const closeModal = () => {
        document.getElementById('my_modal_1').close();
    };

    const handleTakeAssignmentClick = () => {
      if (user.email === ownerEmail) {
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "You can't take your own assignment!",
          });
      } else {
          document.getElementById('my_modal_1').showModal();
      }
  };

    return (
        <div className="grid  my-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 ">
          <img className="h-96 w-full rounded-2xl" src={assignmentThumbnail} alt="thumbnail" />
          </div>
            
  <div className=" shadow-2xl p-4 rounded-3xl space-y-4 border">
    <h2 className=" mt-16 mb-5 text-2xl font-semibold"> {assignmentTitle} </h2>
    <hr className="border-rose-500" />
    <p className="mt-5">  {assignmentDescription} </p>
    <p className="flex gap-3 items-center"><FaMarker className="text-rose-500 " />  {assignmentMark} </p>
    <p className="flex gap-3 items-center"><SiLevelsdotfyi className="text-rose-500 " />  {level} </p>
    <p className="flex gap-3 items-center"><MdOutlineDateRange className="text-rose-500 " />  {new Date(date).toLocaleDateString() } </p>
    <div className="card-actions justify-end">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={handleTakeAssignmentClick}>Take assignment</button>
<dialog  id="my_modal_1" className="modal z-0">
  <div className="modal-box">
  <section className="max-w-4xl p-6 mx-auto  rounded-md  bg-base-100">
          <button >Fill the assignment</button>

          <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

            <div>
                <label>Assignment Doc/Pdf</label>
                <input
                  id="assignmentDoc"
                  type="url"
                  placeholder="doc/pdf Link"
                  {...register("assignmentDoc", { required: true })}
                  className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
          
              <div>
                <label>Assignment Note</label>
                <textarea
                  {...register("assignmentNote", { required: true })}
                  className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex gap-2 justify-end mt-6">
            <button onClick={closeModal} className="btn">cancel</button>
              <button
                type="submit"
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
  </div>
</dialog>
      
    </div>
  </div>

        </div>
    );
};

export default ViewDetails;