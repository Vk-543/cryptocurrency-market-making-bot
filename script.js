document.getElementById("start-bot").addEventListener("click", () => {
    logMessage("Starting market-making bot...");
    fetch("/start-bot")
      .then(response => response.json())
      .then(data => logMessage(data.message))
      .catch(err => logMessage(`Error: ${err.message}`));
  });
  
  document.getElementById("stop-bot").addEventListener("click", () => {
    logMessage("Stopping market-making bot...");
    fetch("/stop-bot")
      .then(response => response.json())
      .then(data => logMessage(data.message))
      .catch(err => logMessage(`Error: ${err.message}`));
  });
  
  function logMessage(message) {
    const logList = document.getElementById("log-list");
    const logItem = document.createElement("li");
    logItem.textContent = message;
    logList.appendChild(logItem);
  }
  