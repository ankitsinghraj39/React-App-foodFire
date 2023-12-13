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
        return(
            <div class="offline-message">
            <h1>You are offline</h1>
            <p>Please check your internet connection and try again.</p>
</div>
        );
    }

    //not render component (Early return)
    if (!allRestaurants) return null;

    if (filteredRestaurants?.length === 0 && allRestaurants?.length != 0) 
        return <h1>Sorry, No Record Found!!</h1>;
    
    return allRestaurants?.length === 0 ? ( 
        <Shimmer /> 
    ) : (
        <>
            <div className="search-container">
                <input className="search-input" type="text" placeholder="Search" value={searchInput} onChange={(e) => { setSearchInput(e.target.value); }} />  
                {/* e.target.value  --(merans)--> whatever u write in input */}
                <button 
                    className="search-button" 
                    onClick={()=> {
                        const data = searchFilter(searchInput, allRestaurants); 
                        setFilteredRestaurants(data);
                    }}
                >
                Search
                </button>
            </div>
            <div className="body flex justify-evenly absolute flex-wrap">
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