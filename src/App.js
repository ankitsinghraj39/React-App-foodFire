// console.log("js console working");

import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header_component from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Error } from "./components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
// import InstaMart from "./components/instaMart";


// ------- Parcel ----=-
//Chunking
//Code Spliting
//Dynamic Bundling
//Lazy Loading
//On Demand Loading
//Dynamic Import

const InstaMart = lazy(()=> import("./components/instaMart"));

//upon on demand loading --> upon render --> suspend Loading

const About = lazy(()=> import("./components/About"));

//LAYOUT
const App_layout=()=>{
  return(
    // <React.Fragment></React.Fragment>
    <>
      <Header_component />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App_layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",  // parentPath/{path} => localhost:1234/about
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",  // parentPath/{path} => localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter} />);
