import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App.jsx";

const appElement = document.getElementById("app");
const root = createRoot(appElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
