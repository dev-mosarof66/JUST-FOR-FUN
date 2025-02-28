import { lazy } from "react";
import ThemeButton from "./components/ThemeButton";
// import "./CSS/Layout.css";
const Home = lazy(() => import("../src/pages/Home"));

const Layout = () => {
  return (
    <div className="bg-black w-full relative">
      <Home />
      {/* ThemeButton  */}
      {/* <ThemeButton /> */}
    </div>
  );
};

export default Layout;
