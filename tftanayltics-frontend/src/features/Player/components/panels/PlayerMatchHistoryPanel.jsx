import React from "react";
import PlayerGameMatch from "../panels/PlayerGameMatch";

// Placement color scheme
function getColorClass(placement) {
  if (placement === 1) return "border-[#F1C555] text-[#F1C555]";
  if (placement === 2) return "border-[#DC38C3] text-[#DC38C3]";
  if (placement === 3) return "border-[#6ECCFF] text-[#6ECCFF]";
  if (placement === 4) return "border-[#37D488] text-[#37D488]";
  return "border-[#bbbbbb] text-[#bbbbbb]";
}

// Fallback for missing images
const handleImgError = (e) => {
  e.target.src = "/default-unit.png";
};

const PlayerMatchHistoryPanel = ({ matches }) => {
  if (!matches || matches.length === 0) {
    return (
      <div className="bg-[#1E2030] p-6 rounded-lg">
        <p className="text-gray-400">No match history available.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#1E2030] p-6 rounded-lg">
      <h2 className="text-xl text-white font-semibold mb-4">Match History</h2>
      <ul className="space-y-4">
        {matches.map((match) => (
          <li
            key={match.matchId}
            className="flex flex-col bg-[#2C2F4A] pt-2 pb-3 px-4 rounded-lg shadow-md"
          >
            <PlayerGameMatch match={match} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerMatchHistoryPanel;
