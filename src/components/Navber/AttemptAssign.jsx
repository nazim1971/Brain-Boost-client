import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";


const AttemptAssign = () => {
    const {user} = useContext(AuthContext)
    const [done , setDone] = useState([]);

    useEffect(()=>{
        getData()
    },[user])
    const getData = async()=>{
        const {data} = await axios(`${import.meta.env.VITE_API_URL}/getAssign/${user?.email}`, {withCredentials: true})
        setDone(data)
    }

   console.log(done);


    return (
        <div>
            <div className="grid grid-cols-3 gap-5">
                {
                    done.map(i=> <div key={i._id} className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title"> Title {i.title} </h2>
                      <p>Total Mark: {i.mark} </p>
                      <p>Status: {i.status} </p>
                      {
                        i.finalMark && <p>Your Mark {i.finalMark} </p>
                      }
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default AttemptAssign;