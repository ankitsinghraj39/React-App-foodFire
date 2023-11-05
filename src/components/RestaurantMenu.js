import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cloudinary_img_url, res_Menu_Url } from "../config";
import Shimmer from "./Shimmer";
import { useRestaurantMenu, useRestaurantMenus } from "../utils/useRestraunt";

const RestaurantMenu = () => {

    const resId = useParams();
    // console.log(resId);

    const resMenu = useRestaurantMenu(resId);
    const resMenus = useRestaurantMenus(resId);

    return !resMenu ? ( 
        <Shimmer /> 
        ) : (
        <div className="res-menu flex justify-evenly m-20">
            <div className="res-menu-left">
                <h1>Restaurant Id: {resId?.id}</h1>
                <h2>Restaurant Name: {resMenu?.name}</h2>
                <img className=" h-52" src={ cloudinary_img_url + resMenu?.cloudinaryImageId} />
                <h3>{resMenu?.cuisines?.join(",")}</h3>
                <h3>{resMenu?.locality}</h3>
                <h3>{resMenu?.city}</h3>
                <h3>{resMenu?.avgRating} Stars</h3>
                <h3>{resMenu?.costForTwoMessage}</h3>
            </div>
            <div className="res-menu-right">
                <h1>Restaurant Menu</h1>
                <ul className=" p-5">
                    {Object.values(resMenus).map((e)=>(
                        <li key={e?.card?.info?.id}>{e?.card?.info?.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;