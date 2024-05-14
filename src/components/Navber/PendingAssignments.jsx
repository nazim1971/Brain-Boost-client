

import { FaUser } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";


const PendingAssignments = () => {
  const pendingData = useLoaderData();

  

  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 my-20 gap-5">
        {pendingData.map((i) => (
          <div key={i._id} className=" rounded-2xl border bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{i.title} </h2>
              <hr />
              <p>Total Marks: {i.mark} </p>
              <p className="flex items-center gap-2"><FaUser className="text-xl text-rose-500" /> {i.name} </p>
              <div className="card-actions justify-end">
               <Link className="btn" to={`/giveMarks/${i._id}`} >Give marks</Link>    
              </div>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default PendingAssignments;
