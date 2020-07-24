import ReactDOM from "react-dom";
import { billOfLadingSample } from "../src/templates/billOfLadingSample";
import React from "react";
import { App } from "./app";

ReactDOM.render(
  <App
    documents={[
      { name: "Default document", document: billOfLadingSample },
      {
        name: "Red document",
        document: {
          ...billOfLadingSample,
          foo: "bar",
          $template: {
            ...billOfLadingSample.$template,
            name: "red"
          }
        }
      }
    ]}
  />,
  document.getElementById("root")
);
