import express from "express";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
import rfs from "rotating-file-stream";
import prayerTimesRoutes from "./routes/prayerTimesRoutes.js"
import cityRoutes from "./routes/cityRoutes.js"
import {notFound, errorHandler} from "./middleware/errorHandlers.js"

dotenv.config()
const app = express()
const __dirname = path.resolve()

// create a rotating write stream
const accessLogStream = rfs.createStream('access.log', {
    interval: '3d', // rotate daily
    path: path.join(__dirname, 'log')
})
   
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
 
  
// routes
app.use('/api/prayertimes', prayerTimesRoutes)
app.use('/api/cities', cityRoutes)

// serving static files in prod
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
} else {
    app.get('/', (req, res)=>{
        res.send('API is running!')
    })
}

// middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5001
app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`) )