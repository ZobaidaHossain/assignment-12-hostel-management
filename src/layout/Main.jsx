import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";


const Main = () => {
    const location=useLocation();
    console.log(location);
    const noHeaderFooter=location.pathname.includes('meals') ;
    return (
        <div>
             {noHeaderFooter ||<Navbar></Navbar> }
            <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;