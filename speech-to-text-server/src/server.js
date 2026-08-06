require("dotenv").config();

const http = require("http");
const { WebSocketServer } = require("ws");

const app = require("./app");
require("./config/db");

// ✅ Correct file
const setupGeminiSocket = require("./websocket/geminiSocket");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const wss = new WebSocketServer({ server });

setupGeminiSocket(wss);

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});