import { useEffect, useState } from "react";

const useAuth = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(()=>{
    //     isLoggedIn ? (
    //         <button color="black" onClick={()=>setIsLoggedIn(false)}>Logout</button>
    //     ) : (
    //         <button color="black" onClick={()=>setIsLoggedIn(true)}>Login</button>
    //     );

    //     return()=>{
    //         //remove onClick event listener,here...

    //     }
    
    // },[]);
    return isLoggedIn;
}

export default useAuth;