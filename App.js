
import React from "react";
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

