function e(e,t,s,n){Object.defineProperty(e,t,{get:s,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var s=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequirefb24;s.register("h0EEC",function(t,n){Object.defineProperty(t.exports,"__esModule",{value:!0,configurable:!0}),e(t.exports,"default",()=>u);var a=s("ayMG0");s("aoYtd");var o=s("aphAM"),r=s("iwhH4"),i=s("acw62");// const About = () => {
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
class l extends i.Component{constructor(e){super(e);//best place for states bcs constructor automatic calls
// console.log("Parent(about) - Constructor");
}componentDidMount(){// console.log("Parent(about) - componentDidMount");
// best place API Call after render
}render(){// console.log("Parent(about) - render(class comp)");
return/*#__PURE__*/(0,a.jsxs)("div",{children:[/*#__PURE__*/(0,a.jsx)("h1",{className:"font-bold text-4xl",children:"About Us Page"}),/*#__PURE__*/(0,a.jsx)("p",{children:"This is a Food Villa React app. You can order your food by here... Thank You."}),/*#__PURE__*/(0,a.jsx)(o.Outlet,{}),/*#__PURE__*/(0,a.jsx)(r.default,{name:"first Child - class",id:"1234"})]})}}var u=l}),s.register("iwhH4",function(n,a){e(n.exports,"default",()=>l);var o=s("ayMG0"),r=s("acw62");class i extends /*@__PURE__*/t(r).Component{constructor(e){super(e),//creating state in class component
this.state={userInfo:{login:"dummy-username",id:"dummy-id",avatar_url:"dummy-avatarurl",name:"dummy-name",location:"dummy-location"}}}async componentDidMount(){//API Call
let e=await fetch("https://api.github.com/users/ankitsinghraj39"),t=await e.json();// console.log(json);
this.setState({userInfo:t})}componentWillUnmount(){return this.setState.userInfo}// componentDidMount(){
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
render(){let{count:e}=this.state,{count2:t}=this.state;return/*#__PURE__*/(0,o.jsxs)("div",{className:"flex justify-evenly m-20",children:[/*#__PURE__*/(0,o.jsxs)("div",{children:[/*#__PURE__*/(0,o.jsx)("h1",{className:" font-medium text-3xl",children:"Profile (Class Component)"}),/*#__PURE__*/(0,o.jsxs)("h2",{className:" font-semibold text-2xl",children:["Name: ",this.state.userInfo.name]}),/*#__PURE__*/(0,o.jsxs)("h2",{children:["Id: ",this.state.userInfo.id]}),/*#__PURE__*/(0,o.jsxs)("h2",{children:["User Name: ",this.state.userInfo.login]}),/*#__PURE__*/(0,o.jsxs)("h2",{children:["Location: ",this.state.userInfo.location]})]}),/*#__PURE__*/(0,o.jsx)("div",{children:/*#__PURE__*/(0,o.jsx)("img",{className:"h-40",src:this.state.userInfo.avatar_url})})]})}}var l=i});//# sourceMappingURL=About.4d7d1ee8.js.map

//# sourceMappingURL=About.4d7d1ee8.js.map
