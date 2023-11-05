import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count, setCount] = useState(10);
    const [count2, setCount2] = useState(20);
    // console.log("render function");

    useEffect(()=>{
        //API call
        //fetch("");

        // console.log("useEffect == component did mount");
    });

    useEffect(()=>{
        //API call
        
        const timer = setInterval(()=>{
            console.log("Namaste react(func)");
        },1000);

        // console.log("useEffect == component did mount");

        return()=>{
            clearInterval(timer);
            console.log("useeffect return");
        };
    },[]);

    console.log("render(frofilr func. comp)");

    useEffect(()=>{
        //API call

        // console.log("useEffect(func. comp.) == component did update(class comp.)");
    },[count]);
    useEffect(()=>{
        //API call

        // console.log("useEffect(func. comp.) == component did update(class comp.)");
    },[count2]);

// console.log("render");

    return (
        <div>
            <h1>Profile Functional Component</h1>
            <h1>Name: {props.name}</h1>
            <h1>ID: {props.id}</h1>
            <h1>Count: {count}</h1>
            <h1>Count: {count2}</h1>
            <button onClick={()=>{
                    setCount(100);
                    setCount2(200);
                }}>
                SetCountFun
            </button>
            <h1>Count: {count}</h1>
            <h1>Count: {count2}</h1>
        </div>
    );
};

export default Profile;