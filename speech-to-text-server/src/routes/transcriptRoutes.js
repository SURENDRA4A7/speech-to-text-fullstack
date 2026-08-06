const express = require("express");
const router = express.Router();

const transcriptController = require("../controllers/transcriptController");

// Create Transcript
router.post("/", transcriptController.saveTranscript);

// Get All Transcripts
router.get("/", transcriptController.getAllTranscripts);

// Delete Transcript
router.delete("/:id", transcriptController.deleteTranscript);

// Update Transcript
router.put("/:id", transcriptController.updateTranscript);

module.exports = router;