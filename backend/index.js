const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { PrayerTimes, Coordinates, CalculationMethod } = require("adhan");

const app = express();
const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: "http://localhost:5173", // Fixed the incorrect protocol
    credentials: true,
  })
);
app.use(express.json());

// variable

let location;

app.post("/api/prayer", (req, res) => {
  const { latitude, longitude } = req.body;
  location = {
    latitude,
    longitude,
  };
  res.send("OK");
});

app.get("/api/prayer", (req, res) => {
  console.log(location);
  
  const coordinates = new Coordinates(location.latitude, location.longitude);
  const date = new Date();
  console.log(date.getMonth());
  
  const params = CalculationMethod.MuslimWorldLeague();
  const prayerTimes = new PrayerTimes(coordinates, date, params);

  res.status(200).json({
    date: date.toLocaleDateString(),
    fajr: prayerTimes.fajr.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    dhuhr: prayerTimes.dhuhr.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    asr: prayerTimes.asr.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    maghrib: prayerTimes.maghrib.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    isha: prayerTimes.isha.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  });
});

app.get("/api/getfullcalendar",(req,res)=>{
  let fullCalendar = [];




})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
