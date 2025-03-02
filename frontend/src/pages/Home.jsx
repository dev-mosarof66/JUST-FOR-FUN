import { useContext, useEffect } from "react";
import HomeContent from "../components/HomeContent";
import Context from "../context/Context";
import axios from "axios";

const Home = () => {
  const { location, setFullCalendar, setLoading } = useContext(Context);
  // we want to fetch data by using axios on the /api/v1/location//ramadan-calendar
  const fetchData = async () => {
    const res = await axios.post("/api/v1/location/ramadan-calendar", {
      latitude: location.latitude,
      longitude: location.longitude,
    });
    return res;
  };

  useEffect(() => {
    if (location) {
      fetchData()
        .then((res) => {
          setFullCalendar(res.data.calendarArray);
          console.log(res.data.calendarArray);
          setLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [location]);
  return (
    <div>
      <HomeContent />
    </div>
  );
};

export default Home;
