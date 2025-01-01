import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import CircumIcon from "@klarr-agency/circum-icons-react"; // React

function Header() {
  const[isLoggedIn , setIsLoggedIn] = useState(true);

  const onClick = () => {
    setIsLoggedIn(prev => !prev);
  }
  

  return (
    <>
      <div className="w-full pl-10 pr-10 mt-8 mb-8 flex justify-between items-center font-poppins">
        <div className="flex flex-row items-center">
          <div>
            <img className='h-10 w-10 items-center' src='/assets/pink.png' alt="Logo" />
          </div>
          <div className="font-bold text-3xl text-neutral-800">
            <h2>craftEra</h2>
          </div>
        </div>

        <div className="flex  flex-row text-md font-medium gap-8 items-center align-middle tracking-wide">
          <NavLink to="/" 
          className={({ isActive }) =>
            isActive
              ? "text-neutral-50  bg-neutral-800 px-4 py-2 duration-200 rounded-lg "
              : "text-gray-900 hover:bg-neutral-200 bg-white px-4 py-2 duration-200 rounded-lg "
          }
          >Home</NavLink>
          
          <NavLink to="/about" className={({ isActive }) =>
              isActive
                ? "text-neutral-50  bg-neutral-800 px-4 py-2 duration-200 rounded-lg "
                : "text-gray-900 hover:bg-neutral-200 bg-white px-4 py-2 duration-200 rounded-lg "
            }>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) =>
              isActive
                ? "text-neutral-50  bg-neutral-800 px-4 py-2 duration-200 rounded-lg "
                : "text-gray-900 hover:bg-neutral-200 bg-white px-4 py-2 duration-200 rounded-lg "
            }>Contact</NavLink>
          
          
          {/* <div onClick={onClick} className="h-8 w-8 text-white rounded-full bg-gray-900"></div> */}
          {isLoggedIn ? (<div className="flex " onClick={onClick}> 
              <Link to="/login">
                { isLoggedIn &&<div className='flex ring-[2px] ring-inset ring-neutral-700 rounded-lg bg-neutral-50 gap-2 px-4 py-2 items-center text-center'><div className=" text-gray-800   text-ellipsis font-normal">Get started</div><div className="flex items-center h-6 w-6"><CircumIcon name="login"/></div></div>}
              </Link>
              {/* <Link to="/signup">
                { isLoggedIn && <div className="px-4 py-2 text-white rounded-lg bg-gray-900">Sign up</div>}
              </Link> */}
            </div>):(<div  className="h-8 w-8 text-white rounded-full bg-gray-900"></div>
            
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
