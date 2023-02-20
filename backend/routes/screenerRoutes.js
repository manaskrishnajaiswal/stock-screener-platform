import express from "express";
const router = express.Router();
import { getStockData } from "../controllers/screenerControlers.js";

// @desc    Get stock data
// @route   GET /api/yahoo-finance
// @access  Private
router.route("/").get(getStockData);

export default router;
