import React, { useState, useEffect } from "react";
import Context from "./Context";
import axios from "axios";

const Provider = ({ children }) => {
  const [showMenu, setMenuBar] = useState(false);
  const [Theme, setTheme] = useState("light");
  const [showIftaarDowa, setShowIftaarDowa] = useState(false);
  const [locationRes, setLocationRes] = useState(false);
  const [prayerTimes, setPrayerTimes] = useState([]);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [fullCalendar, setFullCalendar] = useState(null); //will receive an array with 30 days

  // send data to api
  const sendData = async () => {
    if (!location) return;
    try {
      const res = await axios.post("/api/prayer", {
        latitude: location.latitude,
        longitude: location.longitude,
      });
      setLocationRes(res.data);
    } catch (error) {
      console.error("Error sending data:", error);
      setLocationRes(false);
    }
  };

  // fetch data from api

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/prayer");
      setPrayerTimes(response.data);
    } catch (error) {
      console.error("Error fetching prayer times:", error);
    }
  };

  //fetch full data of 1 to 30 ramadan
  const fetchCompleteData = async () => {
    try {
      const response = await axios.get("/api/getfullcalendar");
      setFullCalendar(response.data);
    } catch (error) {
      console.error("Error fetching prayer times:", error);
    }
  };

  useEffect(() => {
    console.log(location);
    sendData();
    if (locationRes) {
      fetchData();
    } else {
      console.log("error while sending data");
    }
    fetchCompleteData()
  }, [location, locationRes, setLocation,fullCalendar]);

  return (
    <Context.Provider
      value={{
        showMenu,
        setMenuBar,
        Theme,
        setTheme,
        showIftaarDowa,
        setShowIftaarDowa,
        prayerTimes,
        location,
        setLocation,
        error,
        setError,
        fullCalendar
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
