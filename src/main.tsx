import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "../src/styles/ComponentStyles.css";
import "../src/styles/PageStyles.css";
import "../src/styles/ModalStyles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
