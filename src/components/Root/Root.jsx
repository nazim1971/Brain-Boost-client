import { Outlet } from "react-router-dom";
import Footer from "../Home/Footer";
import Nav from "../Navber/Nav";

const Root = () => {
    return (
        <div >
            <div className=" w-[94%] mx-auto ">
            <Nav/>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;