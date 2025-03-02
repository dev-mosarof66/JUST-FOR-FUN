import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Home from "../src/pages/Home.jsx";
import Provider from "./context/Provider";
import RamadanCalendar from "./components/RamadanCalendar.jsx";

//router

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/full-calendar",
        element: <RamadanCalendar />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider>
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  </Provider>
);
