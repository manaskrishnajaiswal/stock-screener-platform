import express from "express";
import { getStockData } from "../controllers/screenerControlers.js";

// @desc    Get stock data
// @route   GET /api/yahoo-finance
// @access  Private
router.route("/").get(verifyToken, getStockData);

export default router;
