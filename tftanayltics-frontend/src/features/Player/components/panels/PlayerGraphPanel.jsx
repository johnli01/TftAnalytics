// src/pages/components/panels/PlayerGraphPanel.jsx
import React from "react";

const PlayerGraphPanel = ({ matches }) => {
  return (
    <div className="bg-[#1E2030] p-6 rounded-lg h-[300px] flex items-center justify-center">
      {/* Placeholder for graph */}
      <p className="text-gray-400 text-lg">
        Graphs will be displayed here (e.g., placements, winrate trends, avg placement).
      </p>
    </div>
  );
};

export default PlayerGraphPanel;
