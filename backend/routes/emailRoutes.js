import express from "express";
import { sendContactForm } from "../controllers/emailjsController.js";


const router = express.Router()

router.route('/')
    .post(sendContactForm)

export default router