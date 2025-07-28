import React from "react";
import usePlayerBasicInfo from "../../hooks/usePlayerBasicInfo";
import PlayerCard from "../cards/PlayerCard";

const PlayerInfoPanel = ({ region, name, tag }) => {
  const { playerInfo, loading, error } = usePlayerBasicInfo(region, name, tag);

  if (loading) return <p>Loading player info...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <section className="relative w-1/4 min-w-[300px] h-[600px] bg-[#23263A] rounded-lg p-6">

      {/* Absolute center the card within the panel */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <PlayerCard
          name={playerInfo.name}
          tag={playerInfo.tag}
          profilePicUrl={playerInfo.profilePicUrl || "/default-avatar.png"}
        />
      </div>
    </section>
  );
};

export default PlayerInfoPanel;
