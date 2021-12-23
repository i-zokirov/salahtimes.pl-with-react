import express from "express";
import dotenv from "dotenv"
import axios from "axios";

import aladhan from "./API/aladhan.js"
import prayerTimesRoutes from "./routes/prayerTimesRoutes.js"


dotenv.config()
const app = express()

app.use('/api/prayertimes', prayerTimesRoutes)

const PORT = process.env.PORT || 5001
app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`) )