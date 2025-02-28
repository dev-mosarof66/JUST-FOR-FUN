const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { PrayerTimes, Coordinates, CalculationMethod } = require("adhan");
const app = express();
const port = process.env.PORT || 3001;
// const
app.use(
  cors({
    origin: "http?://localhost:5173",
    credentials: true,
  })
);

app.get("/api/v1/prayer", (req, res) => {
  const coordinates = new Coordinates(24.3746, 88.6004);
  const date = new Date(); // Current date
  const params = CalculationMethod.MuslimWorldLeague();

  const prayerTimes = new PrayerTimes(coordinates, date, params);

  res.json({
    date: date.toLocaleDateString(),
    fajr: prayerTimes.fajr.toLocaleTimeString(),
    dhuhr: prayerTimes.dhuhr.toLocaleTimeString(),
    asr: prayerTimes.asr.toLocaleTimeString(),
    maghrib: prayerTimes.maghrib.toLocaleTimeString(),
    isha: prayerTimes.isha.toLocaleTimeString(),
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
