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

    let arrCart = [];
    let arrResName = [];

    function setCartItem(e){

        if(arrCart.length==0){
            jsonSting = (localStorage.getItem("cartItem", JSON.stringify(arrCart)));
            arrCart = JSON.parse(jsonSting);
        }
        if(arrCart==undefined){
            arrCart=[];
            arrCart.push({
                resName: resMenu?.name,
                itemName: e?.card?.info?.name,
                itemPrice: Math.floor((e?.card?.info?.price)/100),
                itemImg:  cloudinary_img_url + e?.card?.info?.imageId,
                quantity: 1,
                totalPrice: Math.floor((e?.card?.info?.price)/100),
            });
        }
        else{
            arrCart.push({
                resName: resMenu?.name,
                itemName: e?.card?.info?.name,
                itemPrice: Math.floor((e?.card?.info?.price)/100),
                itemImg:  cloudinary_img_url + e?.card?.info?.imageId,
                quantity: 1,
                totalPrice: Math.floor((e?.card?.info?.price)/100),
            });
        }
        localStorage.setItem("cartItem", JSON.stringify(arrCart));
    }

    return !resMenu ? ( 
        <Shimmer /> 
        ) : (
        <div className="res-menu justify-evenly m-20">
            <div className="res-menu-header flex ">
                <div className="menu-header-left">
                    {/* <h4>Restaurant Id: {resId?.id}</h4> */}
                    <img className="img h-52" src={ cloudinary_img_url + resMenu?.cloudinaryImageId} />
                </div>
                <div className="menu-header-right">
                    <h2 className="res-menu-title">{resMenu?.name}</h2>
                    <p>{resMenu?.cuisines?.join(",")}</p>
                    <p>{resMenu?.locality}</p>
                    <ul className="menu-rating-div flex">
                        <p><span className="res-menu-rating">{resMenu?.avgRating}</span>Stars</p>
                        <p className="cost42">{resMenu?.city}</p>
                        <p className="cost42">{resMenu?.costForTwoMessage}</p>
                    </ul>
                </div>
            </div>
            <div className="res-menu-body">
                <h1 className="res-menu-list">Restaurant Menu</h1>
                    {Object.values(resMenus).map((e)=>(
                            <div className="flex res-menu-card" key={e?.card?.info?.id}>
                                <div>
                                    <h3 className="res-menus-title">{e?.card?.info?.name}</h3>
                                    <p className="res-desc">{e?.card?.info?.description}</p>
                                </div>
                                <div>
                                    <img className="card-img menu-img" src={cloudinary_img_url + e?.card?.info?.imageId}></img>
                                    <div className="cart-btn-div">
                                        <button className="cart-btn" onClick={() => setCartItem(e)}>ADD</button>
                                        <div>
                                            {/* <p>{ResName = localStorage.getItem("resName")}</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                    ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;