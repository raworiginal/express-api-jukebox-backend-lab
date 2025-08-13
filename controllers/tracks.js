const Track = require("../models/track.js");
const express = require("express");
const router = express.Router();
/* =================== CREATE ==================== */
router.post("/", async (req, res) => {
	try {
		const createdTrack = await Track.create(req.body);
		res.status(201).json(createdTrack);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});
/* =================== READ ==================== */
router.get("/:trackId", async (req, res) => {});
/* =================== UPDATE ==================== */
/* =================== DELETE ==================== */

module.exports = router;
