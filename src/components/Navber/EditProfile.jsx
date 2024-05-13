import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const EditProfile = () => {

    const {user , updateUserProfile , setLoader} = useContext(AuthContext)

    const handleEdit = e =>{
        e.preventDefault()
        const body = e.target ;
        const name = body.userName.value
        const photo = body.userPhoto.value
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Profile has been Updated",
            showConfirmButton: false,
            timer: 1500,
          });
        updateUserProfile(name, photo)
      .then(() => {
        setLoader(false)
      })
      .catch();
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 my-20">
            <div className="mx-auto ">
            <img className="h-60 w-60 rounded-2xl" src={user?.photoURL} alt="User-photo" />
            <div className="p-3 space-y-2">
            <h4> <span className="font-semibold">Name:</span> {user?.displayName} </h4>
            <h4> <span className="font-semibold">Email:</span> {user?.email}</h4>
            </div>
            </div>
            <section className="max-w-4xl p-6 mx-auto border  rounded-md shadow-md bg-base-200">
    <h2 className="text-lg font-semibold  capitalize ">Edit profile</h2>

    <form onSubmit={handleEdit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label >Username</label>
                <input name="userName" defaultValue={user?.displayName} id="username" type="text" className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
            </div>
            <div>
                <label >Photo</label>
                <input name="userPhoto" defaultValue={user?.photoURL} id="username" type="text" className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"/>
            </div>

            
        </div>

        <div className="flex justify-end mt-6">
            <button  type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update</button>
        </div>
    </form>
</section>
        </div>
    );
};

export default EditProfile;