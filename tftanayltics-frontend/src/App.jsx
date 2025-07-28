import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Player from "./features/Player/PlayerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/player/:region/:name/:tag" element={<Player />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App
