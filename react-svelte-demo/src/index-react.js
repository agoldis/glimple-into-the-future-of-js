import React from "react";
import App from "./react/App.jsx";
import reactDom from "react-dom";

reactDom.render(
  React.createElement(App, { name: "world" }),
  document.getElementById("reactApp")
);
