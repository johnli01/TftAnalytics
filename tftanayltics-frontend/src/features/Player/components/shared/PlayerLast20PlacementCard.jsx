import React from "react";

function getColorClass(placement) {
  if (placement === 1) return "border-[#F1C555] text-[#F1C555]";
  if (placement === 2) return "border-[#DC38C3] text-[#DC38C3]";
  if (placement === 3) return "border-[#6ECCFF] text-[#6ECCFF]";
  if (placement === 4) return "border-[#37D488] text-[#37D488]";
  return "border-[#bbbbbb] text-[#bbbbbb]";
}

function PlayerLast20PlacementCard({ matches }) {
  return (
    <div className="rounded-[10px] w-[200px] h-[175px]">
        <h2 className="text-white font-bold text-lg text-center">Last 20 Games</h2>
    <div className="pt-2 pl-6 pr-5 grid grid-cols-5 gap-x-[1px] gap-y-[5px]">
      {matches && matches.length > 0 ? (
        matches.map((match, index) => (
          <div
            key={match.matchId || index}
            className={`w-6 h-6 rounded-[5px] border-[2.5px] flex items-center justify-center text-[20px] font-semibold ${getColorClass(
              match.placement
            )}`}
          >
            {match.placement}
          </div>
        ))
      ) : (
        <p className="text-white col-span-5">No matches found.</p>
      )}
    </div>

    </div>
  );
}

export default PlayerLast20PlacementCard;
