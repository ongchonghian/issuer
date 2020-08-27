import React from "react";
import ReactDOM from "react-dom";
import { FramedDocumentRenderer, fullAttachmentRenderer } from "@govtechsg/decentralized-renderer-react-components";
import { registry } from "./templates";
import "./index.css";

ReactDOM.render(
  <FramedDocumentRenderer templateRegistry={registry} attachmentToComponent={fullAttachmentRenderer} />,
  document.getElementById("root")
);
