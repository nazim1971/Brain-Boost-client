import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";


const Footer = () => {
    return (
        <div>
<div className="bg-[#262626] mt-44">
  <div className="">
    <footer className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-5 p-10 text-white">
      <aside className="lg:col-span-2 col-span-2 md:col-span-3  flex flex-col">
      <p className='text-4xl font-bold'> 
              <Typewriter
              words={['Brain', 'Boost', 'Brain Boost']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
              />
              </p>
              <div className="join my-4">
  <input className="input bg-base-200 DWT input-bordered join-item" placeholder="Email"/>
  <button className="btn join-item rounded-r-full">Subscribe</button>
</div>
        <div className="text-xl flex gap-2 text-rose-500 my-2">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaGithub />
          <FaYoutube />
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-bold">Contact Info :</h3>
          <p className="flex items-center gap-2">
            {" "}
            <FaPhoneAlt className="text-rose-500" /> (888) 111-2222
          </p>
          <p className="flex items-center gap-2">
            {" "}
            <IoMdMailOpen className="text-rose-500" /> support@BrainBoost.com
          </p>
          <p className="flex items-center gap-2">
            {" "}
            <FaLocationDot className="text-rose-500" /> 23 Science Avenue, Labtown, USA
          </p>
        </div>
      </aside>
      <nav className="flex flex-col">
        <h6 className="footer-title text-rose-500">About Study Assignment Project</h6>
        <a className="link link-hover">Research Topics</a>
        <a className="link link-hover">Collaboration</a>
        <a className="link link-hover">Innovative Projects</a>
        <a className="link link-hover">Scientific Disciplines</a>
        <a className="link link-hover">Peer Reviews</a>
        <a className="link link-hover">Publications</a>
        <a className="link link-hover">Conferences</a>
        <a className="link link-hover">Resources</a>
      </nav>
      <nav className="flex flex-col">
        <h6 className="footer-title text-rose-500">Get Involved</h6>
        <a className="link link-hover">Submit Assignment</a>
        <a className="link link-hover">Join a Project</a>
        <a className="link link-hover">Collaborate with Peers</a>
        <a className="link link-hover">Explore Research Topics</a>
        <a className="link link-hover">Attend Conferences</a>
        <a className="link link-hover">Participate in Discussions</a>
      </nav>
      <nav className="flex flex-col col-span-2 mx-auto md:col-span-1 ">
        <h6 className="footer-title text-rose-500">Legal</h6>
        <a className="link link-hover">Terms of Use</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Cookie Policy</a>
      </nav>
    </footer>
    <div className="px-10">
      <hr className="opacity-20" />
      <p className="text-center text-sm text-white py-5">© 2024 {" "}
        <a>
          Brain
          <span className="text-rose-500"> -Boost</span>
        </a> Reserved</p>
    </div>
  </div>
</div>

        </div>
    );
};

export default Footer;