import ProfileFunctionalComp from "./Profile";
import { Outlet } from "react-router-dom";
import ProfileClassComp from "./ProfileClass";
import React, {Component} from "react";
import { useState } from "react";


//Class Component About

class About extends Component{

    // const [isProfileSectionVisible, setProfileSectionVisibility] = useState(true);

    // const toggleProfileSection = () => {
    //     setProfileSectionVisibility(!isProfileSectionVisible);
    // }

    // <button onClick={toggleProfileSection}>Toggle Profile Section</button>
    //   {isProfileSectionVisible && (
    //     <div className="profile-section">
    //       {/* Your profile section content goes here */}
    //       <p>This is the profile section content.</p>
    //     </div>
    //   )}

    constructor(props){
        super(props);
        //best place for states bcs constructor automatic calls
        // console.log("Parent(about) - Constructor");
    }

    componentDidMount(){

        // console.log("Parent(about) - componentDidMount");

        // best place API Call after render
    };

    render(){
        // console.log("Parent(about) - render(class comp)");
        return(
            <div className="about-us">
            <div className="about-left font-bold text-4xl">            
            <h1>
                Welcome to
                The world of
                Tasty & Fresh Food
            </h1>
            <p>
                "Better you will feel if you eat a FoodFire healthy meal"
                You can order your food by here...
                Thank You.
            </p>

            <img className="about-right" src="https://foodfire-app.netlify.app/burger-image.ec55d069.png" alt="Food Image"></img>
            </div>

            {/* <Profile icon to toggle profile section  */}
            {/* <div className="profile-icon" onclick="toggleProfileSection()">👤</div> */}

            <Outlet />
            <ProfileClassComp name={"first Child - class"} id="1234"/>
            
            </div>
        );
    }
}

export default About;