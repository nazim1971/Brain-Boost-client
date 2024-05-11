import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { ImLab } from "react-icons/im";


const PendingAssignments = () => {

    const pendingData = useLoaderData()
    console.log(pendingData);

    return (
        <div>
           <div>
            {
                pendingData.map(i=> <div key={i._id} className="card w-96 bg-base-100 shadow-xl">
                
                <div className="card-body">
                  <h2 className="card-title">Title: {i.title} </h2>
                  <p>Marks: {i.mark} </p>
                  <p>Name: {i.name} </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Give mark</button>
                  </div>
                </div>
              </div>)
            }
           </div>
        </div>
    );
};

export default PendingAssignments;