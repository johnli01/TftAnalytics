import React from "react";

function PlayerCard({ name, tag, profilePicUrl }) {
  return (
    <div className="w-[200px] h-[250px] flex flex-col items-center justify-start rounded-lg p-6">
      <img
        src={profilePicUrl || "/default-avatar.png"}
        alt="profile"
        className="w-20 h-20 rounded-full border-4 border-[#4B5A6F] mb-4"
      />
      <h2 className="text-white text-lg font-semibold text-center">{name}</h2>
      <p className="text-gray-400 text-sm text-center">#{tag}</p>
    </div>
  );
}

export default PlayerCard;
