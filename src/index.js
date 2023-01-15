import React from "react";
import ReactDOM from "react-dom/client";
import App from "./OpenAI Dall E/frontend/App";
import { ImageContextProvider } from "./OpenAI Dall E/frontend/context/ImageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ImageContextProvider>
    <App />
  </ImageContextProvider>
);
