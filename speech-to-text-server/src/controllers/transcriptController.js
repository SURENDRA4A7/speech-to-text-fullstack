const transcriptModel = require("../models/transcriptModel");

// Save Transcript
const saveTranscript = (req, res) => {
  const { transcript } = req.body;

  if (!transcript) {
    return res.status(400).json({
      message: "Transcript is required",
    });
  }

  transcriptModel.saveTranscript(transcript, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Database Error",
        error: err,
      });
    }

    res.status(201).json({
      message: "Transcript saved successfully",
      id: result.insertId,
    });
  });
};

// Get All Transcripts
const getAllTranscripts = (req, res) => {
  transcriptModel.getAllTranscripts((err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Database Error",
        error: err,
      });
    }

    res.status(200).json(results);
  });
};

// Delete Transcript
const deleteTranscript = (req, res) => {
  const { id } = req.params;

  transcriptModel.deleteTranscript(id, (err) => {
    if (err) {
      return res.status(500).json({
        message: "Database Error",
        error: err,
      });
    }

    res.status(200).json({
      message: "Transcript deleted successfully",
    });
  });
};
const updateTranscript = (req, res) => {
  const { id } = req.params;
  const { transcript } = req.body;

  transcriptModel.updateTranscript(id, transcript, (err) => {
    if (err) {
      return res.status(500).json({
        message: "Database Error",
        error: err,
      });
    }

    res.json({
      message: "Transcript updated successfully",
    });
  });
};

module.exports = {
  saveTranscript,
  getAllTranscripts,
  deleteTranscript,
  updateTranscript,

};