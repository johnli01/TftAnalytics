import React from "react";

const PlayerStatsCard = ({ totalGames, wins, top4Rate, avgPlacement }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {[ 
        { label: "Games", value: totalGames }, 
        { label: "Avg", value: avgPlacement }, 
        { label: "Wins", value: wins + "%" }, 
        { label: "Top 4%", value: top4Rate } 
      ].map((stat, index) => (
        <div
          key={index}
          className="bg-[#2C2F4A] rounded-lg p-4 flex flex-col items-center justify-center"
        >
          <h3 className="text-white text-sm font-semibold text-center mb-1">{stat.label}</h3>
          <p className="text-white text-lg font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default PlayerStatsCard;
