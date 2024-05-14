import { useLoaderData } from "react-router-dom";


const PopulerDetails = () => {
    const populer = useLoaderData()
    return (
        <div>
                  <div className="mt-10">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-5">
      <div className="p-5 shadow-xl border rounded-xl space-y-5">
        <img className=" rounded-tl-xl rounded-br-xl h-80" src={populer.img} alt="" />
      <h1 className="text-2xl underline text-rose-500 font-semibold">Achieved Marks: {populer.max_marks} </h1>
      <h1>Category: {populer.category} </h1>
      <h1 className="text-xl font-semibold">In Details:</h1>
      <h1 className="pl-3 "> {populer.description} </h1>
      </div>
       <iframe className="w-full border h-[550px] md:h-full rounded-2xl mx-auto" src={populer.doc}  ></iframe>
      
      
      </div>
      </div>
        </div>
    );
};

export default PopulerDetails;