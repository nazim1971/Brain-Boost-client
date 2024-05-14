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



    return (
        <div>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 my-12 gap-5">
                {
                    done.map(i=> <div key={i._id} className="card border  bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title text-rose-500"> Title {i.title} </h2>
                      <p>Total Mark: {i.mark} </p>
                      <p>Status: <span className="text-rose-500">{i.status}</span> </p>
                      {
                        i.finalMark && <p>Your Marks: {i.finalMark} </p>
                      }
                      {
                            i.feedback && <p>Feedback: {i.feedback} </p>
                      }
                      
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default AttemptAssign;