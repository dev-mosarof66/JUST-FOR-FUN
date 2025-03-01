import React, { useContext } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Context from "../context/Context";
import HomeContent from "../components/HomeContent";
import AutoLocationFetcher from "../components/UserLocation";

const Home = () => {
  const { showMenu } = useContext(Context);
  return (
    <div className="text-white">
      <Header />
      <AutoLocationFetcher />
      {showMenu && <SideBar />}
      <HomeContent />
    </div>
  );
};

export default Home;
