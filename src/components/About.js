import ProfileFunctionalComp from "./Profile";
import { Outlet } from "react-router-dom";
import ProfileClassComp from "./ProfileClass";
import React, {Component} from "react";

// const About = () => {
//     return(
//         <div>
//             <h1>About Us Page</h1>
//             <p>
//                 This is a Food Villa React app. You can order your food by here...
//                 Thank You.
//             </p>
//             <Outlet />
//             <ProfileClassComp name={"ankit"} id="5436"/>
//             <ProfileFunctionalComp name={"ankit"} id="5436"/>
//         </div>
//     );
// };
// export default About;




//Class Component About

class About extends Component{

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
            <div>
            <h1 className="font-bold text-4xl">About Us Page</h1>
            <p>
                This is a Food Villa React app. You can order your food by here...
                Thank You.
            </p>
            <Outlet />
            <ProfileClassComp name={"first Child - class"} id="1234"/>
            {/* <ProfileClassComp name={"Second Child"} id="6789"/> */}
            {/* <ProfileFunctionalComp name={"first child - func"} id="5436"/> */}
            </div>
        );
    }
}

export default About;