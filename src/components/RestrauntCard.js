import { cloudinary_img_url } from "../config";

const Restraunt_card=({restraunt})=>{
    // console.log("restraunt is", restraunt);
    const {name, cuisines, lastMileTravelString, cloudinaryImageId}=restraunt;
  
    return(
      <div className="w-48 overflow-y-auto  p-1 m-6 break-words shadow-lg bg-pink-50 card">
        <img src={ cloudinary_img_url + cloudinaryImageId}></img>
        <h2 className="font-bold text-2xl">{name}</h2>
        <h3>{cuisines.join(",")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    );
}

export default Restraunt_card;