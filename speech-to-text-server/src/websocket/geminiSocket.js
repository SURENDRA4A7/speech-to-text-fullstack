const ai = require("../services/geminiService");

const setupGeminiSocket = (wss) => {
  wss.on("connection", (ws) => {
    console.log("✅ Client Connected");

    ws.send(
      JSON.stringify({
        type: "status",
        message: "Gemini WebSocket Connected",
      })
    );

    ws.on("message", async (message) => {
      try {
        const data = JSON.parse(message);

        console.log("Received:", data);

        // Temporary response
        ws.send(
          JSON.stringify({
            type: "transcript",
            text: "Gemini integration coming next...",
          })
        );
      } catch (err) {
        console.error(err);

        ws.send(
          JSON.stringify({
            type: "error",
            message: err.message,
          })
        );
      }
    });

    ws.on("close", () => {
      console.log("❌ Client Disconnected");
    });
  });
};

module.exports = setupGeminiSocket;