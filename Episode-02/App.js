const heading = React.createElement("div",{},
 [React.createElement("h1",{},"This is h1 tag"),
  React.createElement("h2",{},"This is h2 tag"),
   React.createElement("h3",{},"This is h3 tag")
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);