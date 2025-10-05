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
            className="flex flex-col bg-[#2C2F4A] pt-2 pb-3 px-4 rounded-lg shadow-md"
          >
            {/* Traits Row and game date time, full width */}
            <div className="flex items-center justify-between mb-1 w-full">
              <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap flex-1">
                <span className="text-[10px] text-gray-400 px-1 py-0.5 rounded font-semibold bg-gray-800 truncate block text-center">
                  RANKED
                </span>
                <div className="flex items-center gap-1" style={{ marginLeft: '10px' }}>
                  {match.traits?.map((trait, idx) => (
                    <span key={idx} className="inline-flex items-center justify-center px-1 py-0.5 rounded font-semibold bg-gray-800 border border-gray-600 text-[10px] text-gray-400" style={{ width: 'auto', height: 'auto' }}>
                      <img
                        src="/trait-placeholder.png"
                        alt={`Trait ${idx + 1}`}
                        className="w-4 h-4 object-cover mr-1"
                      />
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-[12px] text-gray-400 ml-4 whitespace-nowrap font-semibold">
                {new Date(match.gameDatetime).toLocaleDateString()}
              </span>
            </div>
            {/* Main Row: Placement + Units + Info */}
            <div className="flex items-center justify-between">
              {/* Placement */}
              <div className="flex flex-col items-center mr-4" style={{ minWidth: "48px" }}>
                <span
                  className={`w-11 h-11 flex items-center justify-center rounded-[6px] border-2 font-bold text-xl ${getColorClass(
                    match.placement
                  )}`}
                >
                  {match.placement}
                </span>
              </div>
              {/* Units Row */}
              <div className="flex gap-2 items-end justify-start flex-1">
                {match.units?.map((unit, idx) => (
                  <div
                    key={idx}
                    className="w-11 h-11 flex items-center justify-center rounded-[6px] bg-[#1E2030] border border-gray-700 overflow-hidden"
                  >
                    <img
                      // src={`https://cdn.yourdomain.com/units/${unit.characterId}.png`}
                      src={''}
                      alt={unit.characterId}
                      onError={handleImgError}
                      className="w-11 h-11 object-cover"
                    />
                  </div>
                ))}
              </div>
              {/* Game Info & Room for more */}
              <div className="flex flex-col items-end ml-4" style={{ minWidth: "120px" }}>
                {/* Room for match type, etc. */}
                <span className="text-gray-400 text-xs mt-1">
                  {match.matchType || ""}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerMatchHistoryPanel;
