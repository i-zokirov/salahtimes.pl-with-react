import express from "express";
import { findCity } from "../controllers/cityControllers.js";

const router = express.Router()


router.route('/')
    .get(findCity)



export default router