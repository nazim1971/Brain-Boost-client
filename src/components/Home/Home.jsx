import { Link } from "react-router-dom";
import Banner from "./Banner";
import Faq from "./Faq";


const Home = () => {
    return (
        <div>
            <Banner/>

            <Link to='/viewPrivate'><button className="btn btn-secondary">
                View private route
            </button></Link> 
            <Faq/>
        </div>
    );
};

export default Home;