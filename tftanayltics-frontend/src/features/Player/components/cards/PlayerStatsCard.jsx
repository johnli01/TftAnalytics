// features/Player/components/cards/PlayerStatsCard.jsx
import React from "react";

const PlayerStatsCard = ({ totalGames, wins, top4Rate, avgPlacement }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-green-100 rounded-xl p-4 shadow text-center">
        <h3 className="text-lg font-bold text-green-800">Total Games</h3>
        <p className="text-xl">{totalGames}</p>
      </div>
      <div className="bg-yellow-100 rounded-xl p-4 shadow text-center">
        <h3 className="text-lg font-bold text-yellow-800">Wins</h3>
        <p className="text-xl">{wins}</p>
      </div>
      <div className="bg-indigo-100 rounded-xl p-4 shadow text-center">
        <h3 className="text-lg font-bold text-indigo-800">Top 4 Rate</h3>
        <p className="text-xl">{top4Rate}%</p>
      </div>
      <div className="bg-pink-100 rounded-xl p-4 shadow text-center">
        <h3 className="text-lg font-bold text-pink-800">Avg Placement</h3>
        <p className="text-xl">{avgPlacement}</p>
      </div>
    </div>
  );
};

export default PlayerStatsCard;
