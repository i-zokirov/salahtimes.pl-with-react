import express from "express";
import dotenv from "dotenv"
import axios from "axios";


import prayerTimesRoutes from "./routes/prayerTimesRoutes.js"
import cityRoutes from "./routes/cityRoutes.js"

dotenv.config()
const app = express()

app.use('/api/prayertimes', prayerTimesRoutes)
app.use('/api/cities', cityRoutes)

const PORT = process.env.PORT || 5001
app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`) )