# TftAnalytics 🎯

🚧 **Work in Progress** – This project is currently under active development. Core features are functional, and more improvements are on the way!

TftAnalytics is a comprehensive web application that allows Teamfight Tactics (TFT) players to search for player profiles and gain insights into their match history and performance. Built using modern technologies, the platform emphasizes **data-rich visualizations** and a clean, responsive UI.


## 🚀 Technologies Used

### 🖥 Frontend

- **React** – Component-based UI
- **Tailwind CSS** – Utility-first styling
- **Vite** – Fast bundling & development

### 🧠 Backend

- **Python + Flask** – Lightweight web server and API layer
- **Riot Games API** – Live TFT player & match data
- **Flask-CORS** – Handling frontend-backend communication
- **Requests** – Making HTTP calls to Riot endpoints

## 📁 Project Structure
 ```
tftanalytics/
├── backend/
│ ├── api/
│ │ ├── init.py # Flask API blueprint setup
│ │ ├── player.py # Player related API routes
│ │ ├── match.py # Match related API routes
│ │ └── stats.py # Stats related API routes
│ ├── models/ # Database models (if any)
│ ├── services/ # Riot API wrapper and internal services
│ ├── app.py # Flask app entrypoint
│ └── config.py # Configuration files
│
├── frontend/
│ ├── public/ # Static assets (index.html, favicon, etc.)
│ ├── src/
│ │ ├── components/ # Reusable React components (PlayerCard, StatCard, etc.)
│ │ ├── features/
│ │ │ └── Player/ # Player-specific components & hooks
│ │ │ ├── components/
│ │ │ ├── hooks/
│ │ │ └── pages/
│ │ ├── styles/ # Tailwind base styles and custom css
│ │ ├── App.jsx # Main React app component and router setup
│ │ └── main.jsx # React entrypoint
│ ├── tailwind.config.js # Tailwind CSS configuration
│ └── vite.config.js # Vite build tool configuration
│
└── README.md # This file
 ```
