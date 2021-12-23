import express from "express";
import dotenv from "dotenv"

dotenv.config()
const app = express()


const PORT = process.env.PORT || 5001
app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`) )