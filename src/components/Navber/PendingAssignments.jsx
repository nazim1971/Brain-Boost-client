

import { Link, useLoaderData } from "react-router-dom";


const PendingAssignments = () => {
  const pendingData = useLoaderData();
  console.log(pendingData);

  

  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {pendingData.map((i) => (
          <div key={i._id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Title: {i.title} </h2>
              <p>Total Marks: {i.mark} </p>
              <p>Name: {i.name} </p>
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
