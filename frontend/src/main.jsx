import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import Provider from "./context/Provider";

createRoot(document.getElementById("root")).render(
  
  <Provider>
    <Layout />
  </Provider>
);
