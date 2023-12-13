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

    render(){
        console.log("child - render(class comp)" + this.props.name);
        const {count} = this.state;
        const {count2} = this.state;
        return(
            <div className="profile-section m-20">
                <h2>Profile👤</h2>
                <div className="profile">
                    <img className="profile-img h-40" src={this.state.userInfo.avatar_url}/>
                </div>
                <div>
                    <p className="profile-info font-semibold text-2xl">Name: {this.state.userInfo.name}</p>
                    <p>Id: {this.state.userInfo.id}</p>
                    <p>User Name: {this.state.userInfo.login}</p>
                    <p>Location: {this.state.userInfo.location}</p>
                </div>
            </div>
        );
    }
}

export default Profile;