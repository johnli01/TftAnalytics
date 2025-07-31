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
TftAnalytics/
├── backend/                       # Python Flask backend
│   ├── app.py                     # Entry point for the Flask app
│   ├── riot_api/                  # Riot API wrapper and data fetch logic
│   └── utils/                     # Any helper functions or constants
│
├── frontend/                      # React frontend
│   ├── features/                  # Feature modules
│   │   └── Player/                # Player-specific UI and logic
│   │       ├── components/        # React components for Player UI
│   │       │   ├── cards/         # Stats and info cards
│   │       │   └── panels/        # Larger display panels
│   │       └── hooks/             # Custom React hooks for data fetching
│   ├── App.jsx                    # Main application component
│   ├── index.css                  # TailwindCSS imports
│   └── main.jsx                   # Entry point for Vite
│
├── public/                        # Static assets
│   └── demo.png                   # Demo screenshot for README
│
├── README.md
└── .env                           # Environment variables (not committed)
