import { Link } from "react-router-dom";
import Banner from "./Banner";
import Faq from "./Faq";
import { MdStars } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import { FaPlayCircle } from "react-icons/fa";
import Populer from "./Populer";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-20">
        <div className="space-y-5 flex flex-col justify-center">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold">
            Online{" "}
            <span className="text-rose-500">Learning you can access</span> any
            where easily!
          </h1>
          <h3>
            Simplify your assignment workflow with convenient access from
            anywhere, ensuring seamless submission and tracking of tasks on the
            go!
          </h3>
          <div className="flex gap-10 ">
            <Link
              to="/addAssignments"
              className="btn bg-rose-500 border-none text-lg text-white"
            >
              Get Started
            </Link>

            <Link to='/howItWorks' className="flex gap-2 btn btn-ghost items-center">
              {" "}
              <FaPlayCircle className="text-xl text-rose-500" />
              
              <Typewriter
              words={['See how it works?']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
              />
            </Link>
          </div>
        </div>
        <Banner />
      </div>

      <div className="my-20 ">
      <div className="flex justify-between rounded-xl border-b  shadow w-full">
  
  <div className="stat place-items-center">
    <div className="stat-title ">Assignments</div>
    <div className="text-xl md:text-3xl lg:text-4xl font-semibold">31K</div>
    <div className="stat-desc">From 1st May </div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title ">Users</div>
    <div className="text-xl md:text-3xl lg:text-4xl font-semibold text-secondary">4,200</div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title ">New Registers</div>
    <div className="text-xl md:text-3xl lg:text-4xl font-semibold">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
      </div>

      <div>
        <Populer/>
      </div>

      <Faq />

        {/* exclusive  */}
      <div className="my-20 ">
        <div className="space-y-4 lg:w-[70%] md:w-[80%] w-full mx-auto text-center font-semibold">
          <h1 className="lg:text-5xl text-3xl md:text-4xl">Exclusive Bundles</h1>
          <h4>
            Brain boost is one robust online platform that integrates all the
            necessary tools for effective academic management, providing
            students and educators with everything required for seamless
            assignment management and collaborative learning.
          </h4>
        </div>
      </div>

      <div className="my-20 px-8 h-[600px] md:h-[420px] rounded-2xl bg-rose-500 grid md:grid-cols-2 grid-cols-1 gap-2  md:gap-5 ">
        <div className="md:space-y-3 space-y-2 flex flex-col justify-center ">
          <h1 className="md:text-3xl text-2xl font-semibold my-2 text-red-100">
            Why You should use our website ?
          </h1>
          <p className="flex gap-3 items-center">
            <MdStars className="text-2xl text-rose-200" /> Streamline
            assignments, access resources, and engage with peers on a single
            platform.{" "}
          </p>
          <p className="flex gap-3 items-center">
            {" "}
            <MdStars className="text-2xl text-rose-200" /> Simplify study tasks,
            access materials, and collaborate seamlessly.
          </p>
          <p className="flex gap-3 items-center">
            {" "}
            <MdStars className="text-2xl text-rose-200" /> Effortlessly upload
            assignments, access resources, and connect with a supportive
            community.
          </p>
          <div>
            <Link to="/assignments" className="btn ">
              View Assignments
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <img
            className="w-fit h-full"
            src="https://i.ibb.co/8MKbkWr/smiling-removebg-preview.png"
            alt=""
          />
        </div>
      </div>

      {/* before footer */}

      <div className="my-20 ">
        <div className="space-y-7 md:w-[80%] lg:w-[60%] mx-auto text-center">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">
            <Typewriter
              words={[
                "Got A Problem?",
                "We Got You!",
                "Got A Problem? We Got You!",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
          <p>
            “We rise by lifting others” is what we believe in. You won’t stay
            stuck in the process; that’s our promise. All the support tickets
            are taken care of with high priority. You will hear back from us
            within 12 hours of receiving your mail.
          </p>

          <div className="flex gap-8 justify-center">
            <button className="btn bg-rose-500 text-white border-none">
              Contact Us
            </button>
            <Link to='/howItWorks' className="btn bg-white text-rose-500 border-rose-500">
              User Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
