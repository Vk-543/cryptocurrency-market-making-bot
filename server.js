const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const port = 3000;

let botRunning = false;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

app.get("/start-bot", (req, res) => {
  if (botRunning) {
    return res.json({ message: "Bot is already running." });
  }
  botRunning = true;
  logActivity("Bot started.");
  res.json({ message: "Bot started successfully!" });

  // Example bot logic
  startBotLogic();
});

app.get("/stop-bot", (req, res) => {
  if (!botRunning) {
    return res.json({ message: "Bot is not running." });
  }
  botRunning = false;
  logActivity("Bot stopped.");
  res.json({ message: "Bot stopped successfully!" });
});

function startBotLogic() {
  if (!botRunning) return;

  console.log("Fetching market data...");
  // Example API call (Replace with real trading API)
  axios
    .get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
    .then(response => {
      console.log(`Market Data: ${JSON.stringify(response.data)}`);
    })
    .catch(err => {
      console.error("Error fetching market data:", err.message);
    });

  // Run the bot periodically
  setTimeout(startBotLogic, 5000);
}

function logActivity(message) {
  console.log(`[LOG]: ${message}`);
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
