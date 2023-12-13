import { cloudinary_img_url } from "../config";

const Restraunt_card=({restraunt})=>{
    // console.log("restraunt is", restraunt);
    const {name, cuisines, cloudinaryImageId, avgRatingString, areaName, costForTwo}=restraunt;
  
    return(
      <div className="card card:hover res-info w-48 overflow-y-auto  p-1 m-6 break-words shadow-lg bg-pink-50 ">
        <img src={ cloudinary_img_url + cloudinaryImageId}></img>
        <h2 className="res-card-title font-bold text-2xl">{name}</h2>
        <p className="card-cuisien res-txt">{cuisines.join(",")}</p>
        <div className="flex justify-sp-bw">
          <p className="res-txt"><span className="res-rating">
          {avgRatingString}</span>Star</p>
          <h4 className="res-txt-dot">•</h4>
          <ul className="res-txt">
          {/* <li>{areaName}</li> */}
          <li className="cost42">{costForTwo}</li>
        </ul>
        </div>
        <p className="res-txt">{areaName}</p>
      </div>
    );
}

export default Restraunt_card;