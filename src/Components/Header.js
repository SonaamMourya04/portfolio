import AboutUs from "./About";
import Project from "./Projecdt";
import Skills from "./Skills";

const Header =()=>{
        return(
            <div  className="flex  gap">
             <AboutUs/>
             <Project/>
             <Skills/>
            </div>
        )
    }
    export default Header;