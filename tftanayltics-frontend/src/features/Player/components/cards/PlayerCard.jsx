import React from "react";

function PlayerCard({ name, tag, profilePicUrl }) {
  return (
    <div className="w-[200px] h-[250px] flex flex-col items-center bg-[#2C2F4A] rounded-lg pt-11">
      <img
        src={profilePicUrl}
        alt="profile"
        className="w-20 h-20 rounded-full border-4 border-[#4B5A6F] mb-4"
      />
      <h2 className="text-white text-lg font-semibold">{name}</h2>
      <p className="text-gray-400 text-sm">#{tag}</p>
    </div>
  );
}

export default PlayerCard;
