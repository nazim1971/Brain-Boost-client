import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const ViewDetails = () => {
    const {user} = useContext(AuthContext)
    const viewDetails = useLoaderData();
    const {_id,assignmentTitle,assignmentDescription,assignmentMark,assignmentThumbnail,level,date} = viewDetails


    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        data.title= assignmentTitle
        data.mark= assignmentMark
        data.name = user.displayName
        data.status = "pending"
      data.doneUserEmail = user?.email;
  
      try {
        await axios.post(`${import.meta.env.VITE_API_URL}/doneAssign`, data);
  
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
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={assignmentThumbnail} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Title: {assignmentTitle} </h2>
    <p>Description:  {assignmentDescription} </p>
    <p>Mark:  {assignmentMark} </p>
    <p>level:  {level} </p>
    <p>Date  {new Date(date).toLocaleDateString() } </p>
    <div className="card-actions justify-end">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Take assignment</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
  <section className="max-w-4xl p-6 mx-auto  rounded-md  bg-base-100">
          <h2 className="text-lg font-semibold t capitalize ">
            Do a Assignment
          </h2>

          <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label>Assignment Note</label>
                <input
                  id="assignmentNote"
                  type="text"
                  {...register("assignmentNote", { required: true })}
                  className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>


              <div>
                <label>Assignment Doc/Pdf</label>
                <input
                  id="assignmentDoc"
                  type="text"
                  placeholder="Photo Url"
                  {...register("assignmentDoc", { required: true })}
                  className="block w-full px-4 py-2 mt-2  border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>



            </div>

            <div className="flex justify-end mt-6">
            <button  className="btn">cancel</button>
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
</dialog>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default ViewDetails;