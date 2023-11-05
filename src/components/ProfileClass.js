import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);

        //creating state in class component
        this.state = {
            userInfo: {
                login: "dummy-username",
                id: "dummy-id",
                avatar_url: "dummy-avatarurl",
                name: "dummy-name",
                location: "dummy-location",
            }, 
        };

        console.log("child - Constructor" + this.props.name);
    }

    async componentDidMount(){
        //API Call
        const data = await fetch("https://api.github.com/users/ankitsinghraj39");
        const json = await data.json();
        // console.log(json);
        this.setState({
            userInfo: json,
        });

        console.log("child - componentDidMount" + this.props.name);
    }

    componentWillUnmount(){
        console.log("child - component Will Unmount" + this.props.name);
        return this.setState.userInfo;
    }

    // componentDidMount(){
    //     this.timer = setInterval(()=>{
    //         console.log("Namaste react(class)");
    //     },1000);
        
    //     console.log("child - component did mount(for setInterval)");
    // }

    // componentDidUpdate(prevProps, prevState){
    //     if(this.state.count != prevState.count){
    //         //code
    //     }
    //     if( this.state.count2 != prevState.count2){
    //         //code
    //     }

    //     console.log("component did update - About");
    // }

    // componentWillUnmount(){
    //     console.log("component will unmount - About");
        
    //     clearInterval(this.timer);  //(when component(router) will change)
    // }

    render(){
        console.log("child - render(class comp)" + this.props.name);
        const {count} = this.state;
        const {count2} = this.state;
        return(
            <div className="flex justify-evenly m-20">
                <div>
                    <h1 className=" font-medium text-3xl">Profile (Class Component)</h1>
                    <h2 className=" font-semibold text-2xl">Name: {this.state.userInfo.name}</h2>
                    <h2>Id: {this.state.userInfo.id}</h2>
                    <h2>User Name: {this.state.userInfo.login}</h2>
                    <h2>Location: {this.state.userInfo.location}</h2>
                </div>
                <div>
                    <img className="h-40" src={this.state.userInfo.avatar_url}/>
                </div>
                {/* <button onClick={()=> {
                    this.setState({
                        count: 100,
                        count2: 200,
                    });
                    this.setState({
                        count2: 299,
                    });
                }}>SetCountClass</button> */}
            </div>
        );
    }
}

export default Profile;