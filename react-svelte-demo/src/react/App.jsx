import React from "react";

export default function App({ name }) {
  return React.createElement(
    "h1",
    {
      style: {
        color: "purple"
      }
    },
    [`React says: Hello ${name}!`]
  );
}
