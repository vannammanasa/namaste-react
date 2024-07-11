
/*import React from "react";
import ReactDOM from "react-dom/client";




const number = 1000;
//const parent = React.createElement("div",{},"Manasa Royal");
const Title = () =>(
  <h1 id="heading" className="heading">Namaste React using JSX</h1>
);

const HeadingComponent = () =>(
  <div id ="container">
        <Title />
        <h2>{number} </h2>
        <h1>Learning React</h1>

  </div>

);



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

*/




import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

import RestaurantMenu from "./components/RestaurantMenu";
import { useEffect } from "react";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      }
    ],
    errorElement: <Error />,
  },

]

)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);





