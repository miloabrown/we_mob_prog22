import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const course = {
  name: "Superadvanced web and mobile programming",
  parts: [
      {
          name: "Basics of React",
          exercises: 8,
          id: 1
      },
      {
          name: "Using props",
          exercises: 8,
          id: 2
      },
      {
          name: "Component states",
          exercises: 12,
          id: 3
      }
  ]
}

ReactDOM.render(
  <App course={course} />,
  document.getElementById("root")
)
