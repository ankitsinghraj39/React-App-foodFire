import { useState } from 'react';
import logo from '../../dist/logo1.png';
import { Link, useLoaderData } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import useAuth from '../utils/useAuth';

//LOGO
const Title=()=>{

    return(
      <Link to="/">
        <img className="logo h-28 p-2 rounded-full" src={logo} alt="logo"></img>
      </Link>
    );
  
}

//HEADER Component
const Header_component = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const isLoggedIn = useAuth();
  // const [getLocalVariable, setLocalVariable] = useLoacalStorage();

  const isOnline = useOnline();

    return(
      <div className=" header flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 ">
        {/* Title import in Header*/}
        <Title/>
        {/* navbar */}
        <div className="nav-bar">
          <ul className='flex '>
            <li className=''>
              <Link  className='link' to="/">Home</Link>
            </li>
            <li className='px-2'>
              <Link  className='link' to="/about">About us</Link>
            </li>
            <li className='px-2'>
              <Link  className='link' to="/contact">Contact us</Link>
            </li>
            <li className='px-2'>
              <Link className='link' to="/instamart">🛒</Link>
            </li>
            {/* <li className='px-2'>
              <Link className='link' to="/instamart">InstaMart</Link>
            </li> */}
          </ul>
        </div>
        {/* <p>{isOnline ? "online" : "offline"}</p> */}
        {isLoggedIn ? (
          <button className='login-logout' color='black' onClick={()=> setIsLoggedIn(false)}>Logout</button> 
        ) : (
          <button className='login-logout' color='black' onClick={()=> setIsLoggedIn(true)}>Login</button>
        )}  
      </div>
    );
}

export default Header_component;