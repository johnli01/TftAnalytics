// features/Player/components/cards/PlayerStatsCard.jsx
import React from "react";

const PlayerStatsCard = ({ totalGames, wins, top4Rate, avgPlacement }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-[#2C2F4A] rounded-xl p-3 text-center">
        <h3 className="flex text-lg font-bold text-white-80">Games</h3>
        <p className="text-xl">{totalGames}</p>
      </div>
      <div className="bg-[#2C2F4A] rounded-xl p-3 text-center">
        <h3 className="text-lg font-bold text-white-800">Wins</h3>
        <p className="text-xl">{wins}</p>
      </div>
      <div className="bg-[#2C2F4A] rounded-xl p-3 text-center">
        <h3 className="text-lg font-bold text-white-800">Top 4%</h3>
        <p className="text-xl">{top4Rate}%</p>
      </div>
      <div className="bg-[#2C2F4A] rounded-xl p-3 text-center">
        <h3 className="text-lg font-bold mb-1 text-center break-words">Avg</h3>
        <p className="text-xl">{avgPlacement}</p>
      </div>
    </div>
  );
};

export default PlayerStatsCard;
