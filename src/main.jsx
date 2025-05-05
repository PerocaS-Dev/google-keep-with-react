import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import App from "./google-keep-project/App.jsx";
import "./index.css"; // or './App.css' depending on where your styles are

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
