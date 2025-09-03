// src/pages/components/panels/PlayerMatchHistoryPanel.jsx
import React from "react";

// Placement color scheme (border + text color)
function getColorClass(placement) {
  if (placement === 1) return "border-[#F1C555] text-[#F1C555]";
  if (placement === 2) return "border-[#DC38C3] text-[#DC38C3]";
  if (placement === 3) return "border-[#6ECCFF] text-[#6ECCFF]";
  if (placement === 4) return "border-[#37D488] text-[#37D488]";
  return "border-[#bbbbbb] text-[#bbbbbb]";
}

// Fallback for unit images
const handleImgError = (e) => {
  e.target.src = "/default-unit.png"; // ensure this exists in /public
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
            className="flex flex-col bg-[#2C2F4A] p-4 rounded-lg shadow-md"
          >
            {/* Top Row: Placement + Game Info */}
            <div className="flex items-center justify-between mb-3">
              <span
                className={`w-8 h-8 flex items-center justify-center rounded-[5px] border-2 font-bold text-lg ${getColorClass(
                  match.placement
                )}`}
              >
                {match.placement}
              </span>
              <span className="text-gray-400 text-sm whitespace-nowrap">
                {Math.round(match.gameLength / 60)}m •{" "}
                {new Date(match.gameDatetime).toLocaleDateString()}
              </span>
            </div>

            {/* Units Row */}
            <div className="flex flex-wrap gap-2">
              {match.units?.map((unit, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 flex items-center justify-center rounded-md bg-[#1E2030] border border-gray-700 overflow-hidden"
                >
                  <img
                    src={`https://cdn.yourdomain.com/units/${unit.characterId}.png`}
                    alt={""}
                    onError={handleImgError}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerMatchHistoryPanel;
