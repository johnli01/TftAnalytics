import React from "react";

function getColorClass(placement) {
  if (placement === 1) return "border-[#F1C555] text-[#F1C555]";
  if (placement === 2) return "border-[#DC38C3] text-[#DC38C3]";
  if (placement === 3) return "border-[#6ECCFF] text-[#6ECCFF]";
  if (placement === 4) return "border-[#37D488] text-[#37D488]";
  return "border-[#bbbbbb] text-[#bbbbbb]";
}
const PlayerGameMatchInfo = ({ match }) => (
  <div className="mb-2 flex items-center gap-4">
    <div className="flex flex-col items-center">
      <span className="text-[10px] text-gray-400 px-1 py-0.5 rounded font-semibold bg-gray-800 mb-1">
        RANKED
      </span>
      <span
        className={`w-11 h-11 flex items-center justify-center rounded-[6px] border-2 font-bold text-xl ${getColorClass(match.placement)}`}
      >
        {match.placement}
      </span>
    </div>
    <span className="text-[12px] text-gray-400 ml-2 font-semibold">
      {new Date(match.gameDatetime).toLocaleDateString()}
    </span>
  </div>
);

export default PlayerGameMatchInfo;
