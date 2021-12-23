import express from "express";
import { getPrayerTimesByCityAndDate } from "../controllers/prayerTimesController.js";

const router = express.Router()


router.route('/')
    .get(getPrayerTimesByCityAndDate)


export default router