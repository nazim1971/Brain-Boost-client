import { Link } from "react-router-dom";
import Banner from "./Banner";
import Faq from "./Faq";
import { MdStars } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Faq/>


            <div className="my-20 ">
                <div className="space-y-4 w-[70%] mx-auto text-center font-semibold">
                <h1 className="text-5xl">Exclusive Bundles</h1>
                <h4>Brain boost is one robust online platform that integrates all the necessary tools for effective academic management, providing students and educators with everything required for seamless assignment management and collaborative learning.</h4>
                </div>
            </div>


            <div className="my-20 px-8 h-96 rounded-2xl bg-rose-500 flex gap-5 ">
                <div className="space-y-3 flex flex-1 flex-col justify-center ">
                    <h1 className="text-3xl font-semibold my-2 text-red-100">
                    Why You should use our website ?
                    </h1>
                    <p className="flex gap-3 items-center"><MdStars className="text-2xl text-rose-200" /> Streamline assignments, access resources, and engage with peers on a single platform. </p>
                    <p className="flex gap-3 items-center"> <MdStars className="text-2xl text-rose-200" /> Simplify study tasks, access materials, and collaborate seamlessly.</p>
                    <p className="flex gap-3 items-center"> <MdStars className="text-2xl text-rose-200" /> Effortlessly upload assignments, access resources, and connect with a supportive community.</p>
                    <div>
                    <Link to='/assignments' className="btn ">View Assignments</Link>
                    </div>
                </div>
                <div className="flex-1" >
                    <img className="w-fit h-full"  src="https://i.ibb.co/8MKbkWr/smiling-removebg-preview.png" alt="" />
                </div>
            </div>

                {/* before footer */}

            <div className="my-20 ">
           <div className="space-y-7 md:w-[80%] lg:w-[60%] mx-auto text-center">
                <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">

                <Typewriter
        words={['Got A Problem?', 'We Got You!', 'Got A Problem? We Got You!']}
        loop={true}
        cursor
        cursorStyle='_'
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={2000}
      />
                </h1>
                <p>“We rise by lifting others” is what we believe in. You won’t stay stuck in the process; that’s our promise. All the support tickets are taken care of with high priority. You will hear back from us within 12 hours of receiving your mail.</p>

               <div className="flex gap-8 justify-center">
               <button className="btn bg-rose-500 text-white border-none">Contact Us</button>
                <button className="btn bg-white text-rose-500 border-rose-500">User Guide</button>
               </div>
                </div>
           </div>
        </div>
    );
};

export default Home;