Overview:
This project is a cryptocurrency market-making bot that provides liquidity to cryptocurrency markets by placing buy and sell orders on exchanges. The bot continuously buys at lower prices and sells at higher prices, profiting from the spread. The bot includes both frontend and backend components, with API integration for market data and trade execution.

Features:
i. Automated Trading: Start and stop the market-making bot via the web interface.
ii. Real-time Logs: Display the bot’s logs, including the status of orders and market data.
iii. User-friendly Frontend: Intuitive interface with buttons to manage bot activities (start and stop the bot).
iv. Customizable Parameters: Modify trading parameters, such as the spread and order size, in the backend.
v. Backend Logic: The Node.js server handles bot functionality, fetching market data, placing orders, and processing logs.

Tech Stack
1. Frontend:
- HTML for structure
- CSS for styling
- JavaScript for dynamic interactions
2. Backend:
- Node.js (Express.js for handling API requests)
- Integration with cryptocurrency exchange APIs (e.g., Binance, Coinbase)
3. Data Format:
- JSON for API communication

├── index.html           # Frontend Dashboard UI (Start/Stop bot, view logs)
├── style.css            # Styles for the Dashboard (layout, button designs)
├── script.js            # Handles frontend interactivity (Start/Stop functions, log display)
├── server.js            # Backend logic for bot control, API interaction, and order management
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation

API Endpoints
GET /api/market-data: Fetches real-time market data for selected cryptocurrency pairs.
POST /api/place-order: Sends an order to the exchange for execution (buy/sell).
GET /api/logs: Retrieves the latest logs regarding the bot's operations.
POST /api/start-bot: Starts the bot's operations, fetching data and placing orders.
POST /api/stop-bot: Stops the bot’s operations.

Frontend Components
Dashboard: A simple, responsive dashboard with two main buttons (Start/Stop Bot) and a log window.
Buttons: Start/Stop bot to control its activity.
Logs Section: A placeholder to display logs as the bot operates, such as order placement and bot status.
Style: The frontend is styled using style.css for a clean, minimalist look.

Backend Components
Bot Control: The bot is managed through server.js, which interacts with the cryptocurrency exchange API to fetch market data, place orders, and track performance.
API Integration: Communicates with exchange APIs to fetch real-time market prices and execute trades.
Order Management: Manages buy/sell orders, monitors the order book, and logs each action.
Logs Handling: Sends updates to the frontend for display in real-time.

Customization
API Keys:
You will need to add your cryptocurrency exchange API keys to server.js (or use environment variables) to enable trading and market data fetching.
Trading Parameters:
Customize trading parameters such as order size, frequency of updates, and spread between buy/sell prices by modifying server.js.
