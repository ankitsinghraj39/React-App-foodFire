import { restrauntList } from "../config";
import Restraunt_card from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { searchFilter } from "../utils/helper";
import useOnline from "../utils/useOnline";

//What is state, React Hooks --> (functions) , useState????

const Body=()=>{
    // const searchInput = "KFC";

    //seachTxt is a local state variable
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");  // to create state variable

    useEffect(()=>{
        // console.log("useffect");
        getRestaurants();
    }, []);

    console.log("render");

    async function getRestaurants(){
        const resData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        // console.log(resData);
        const jsonData = await resData.json();
        console.log(jsonData);
        // optional chaining
        setAllRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //you r online or offline , check here...
    const isOnline = useOnline();

    if(!isOnline){
        return <h1> You are OFFLINE, Please check your internet connection !!!</h1>
    }

    //not render component (Early return)
    if (!allRestaurants) return null;

    if (filteredRestaurants?.length === 0 && allRestaurants?.length != 0) 
        return <h1>Sorry, No Record Found!!</h1>;
    
    return allRestaurants?.length === 0 ? ( 
        <Shimmer /> 
    ) : (
        <>
            <div className="search-container p-5 bg-pink-50 my-5">
                <input className="focus:bg-green-50 p-2 m-2 search-input" type="text" placeholder="Search" value={searchInput} onChange={(e) => { setSearchInput(e.target.value); }} />  
                {/* e.target.value  --(merans)--> whatever u write in input */}
                <button 
                    className="p-2 m-2 bg-purple-900 hover:bg-gray-900 text-white rounded-md search-btn" 
                    onClick={()=> {
                        const data = searchFilter(searchInput, allRestaurants); 
                        setFilteredRestaurants(data);
                    }}
                >
                Search
                </button>
            </div>
            <div className="flex justify-evenly absolute flex-wrap body">
                { filteredRestaurants.map((res)=>{
                    {/* console.log("res is", res); */}
                    return (
                        <Link className="link" to={"/restaurant/" + res.info.id} key={res.info.id}>
                            <Restraunt_card restraunt={res.info} />
                        </Link>
                    );
                })}

            </div>
        </>
    );
  }

  export default Body;