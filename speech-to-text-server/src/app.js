const express = require("express");
const cors = require("cors");

const transcriptRoutes = require("./routes/transcriptRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Speech to Text Backend is Running...");
});

app.use("/api/transcripts", transcriptRoutes);

module.exports = app;