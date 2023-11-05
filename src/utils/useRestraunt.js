import { useState, useEffect } from "react";
import { res_Menu_Url } from "../config";

export const useRestaurantMenu = (resId) => {
    
    const [resMenu, setResMenu] = useState(null);
    const [resMenus, setResMenus] = useState([]);

    //set data from API
    
    useEffect(()=>{
        fetchResMenuInfo();
    }, []);

    async function fetchResMenuInfo(){
        // const data = await fetch("https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620");
        const data = await fetch(
            `${res_Menu_Url}${resId.id}`
        );
        const json = await data.json();
        // console.log(json.data?.cards[0]?.card?.card?.info);
        setResMenu(json.data?.cards[0]?.card?.card?.info);
        setResMenus(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }

    //return restraunt data
    
    return resMenu;
    // return resMenus;
}
// export default useRestaurant;



export const useRestaurantMenus = (resId) => {
    
    // const [resMenu, setResMenu] = useState(null);
    const [resMenus, setResMenus] = useState([]);

    //set data from API
    
    useEffect(()=>{
        fetchResMenuInfo();
    }, []);

    async function fetchResMenuInfo(){
        // const data = await fetch("https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620");
        const data = await fetch(
            `${res_Menu_Url}${resId.id}`
        );
        const json = await data.json();
        // console.log(json.data?.cards[0]?.card?.card?.info);
        // setResMenu(json.data?.cards[0]?.card?.card?.info);
        setResMenus(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }

    //return restraunt data
    
    return resMenus;
}