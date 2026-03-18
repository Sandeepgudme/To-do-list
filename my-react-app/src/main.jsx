// Entry point of React app
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"
// Rendering App component inside root div
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);