import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useContext, useEffect, useState } from "react";
import Context from "./context/Context";
import SideBar from "./components/SideBar";
import Loader from "./components/Loader/Loader";
import UserLocation from "./components/UserLocation";

const Layout = () => {
  const { showMenu } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {!isLoading ? (
        <div
          className={` transition-all duration-300 ${
            isLoading ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
          } w-full bg-black`}
        >
          <Header />
          <div>{showMenu && <SideBar />}</div>
          <div className="py-30">
            <Outlet />
            <UserLocation />
          </div>
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Layout;
