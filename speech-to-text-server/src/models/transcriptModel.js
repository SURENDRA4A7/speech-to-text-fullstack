const db = require("../config/db");

// Save Transcript
const saveTranscript = (transcript, callback) => {
  const sql = "INSERT INTO transcripts (transcript) VALUES (?)";
  db.query(sql, [transcript], callback);
};

// Get All Transcripts
const getAllTranscripts = (callback) => {
  const sql = "SELECT * FROM transcripts ORDER BY created_at DESC";
  db.query(sql, callback);
};

// Delete Transcript
const deleteTranscript = (id, callback) => {
  const sql = "DELETE FROM transcripts WHERE id = ?";
  db.query(sql, [id], callback);
};
const updateTranscript = (id, transcript, callback) => {
  const sql = "UPDATE transcripts SET transcript = ? WHERE id = ?";
  db.query(sql, [transcript, id], callback);
};

module.exports = {
  saveTranscript,
  getAllTranscripts,
  deleteTranscript,
  updateTranscript
};