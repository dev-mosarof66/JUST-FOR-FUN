import { lazy } from "react";
import ThemeButton from "./components/ThemeButton";
const Home = lazy(() => import("../src/pages/Home"));

const Layout = () => {
  return (
    <div className="bg-black w-full relative">
      <Home />
    </div>
  );
};

export default Layout;
