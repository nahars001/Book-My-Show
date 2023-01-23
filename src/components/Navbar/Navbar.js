import React from "react";
import { GoChevronRight } from "react-icons/go";

const NavSm = () => {

    return(
        <>
       <div className="text-white flex items-center justify-between"> 
        <div> 
            <h3 className="text-xl font-bold">It All starts Here! </h3>
            <span className="text-gray-400 text-xs flex items-center"> 
                        Idukki <GoChevronRight/> 
            </span>
        </div>
        <div className="w-8 h-8">
            <BiSearch className="w-full h-full"/> 

        </div>
    </div>
        </>
    );
};

const NavMd = () =>{
    return (
        <> 
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md" >
            <BiSearch /> 
            <input 
            type="search"
            className = "w-full bg-transparent border-none focus:outline-none "
            placeholder=" Search for movie , events,  "
            />
        </div>
        </>
    );

}

const Navbar = () => {
    return(
        <>
        <nav className="bg-bms-700 p-4 "> 
        <div className="md:hidden">
            {/* Mobile screen  */}
            <NavSm/>
             </div>
             <div className="hidden md:flex lg:hidden">
               {/* tab / meduim */}
                <NavMd/>
             </div>
             <div className="hidden w-full lg:flex">
                {/* large   screen */}
                <NavLg/> 

             </div>
        </nav>
        </>
    );
};



export default Navbar;