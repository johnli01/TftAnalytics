import React from "react";
import usePlayerLast20Matches from "../../hooks/usePlayerLast20Matches";
import PlayerCard from "../cards/PlayerCard";
import PlayerStatsPanel from "./PlayerStatsPanel";
import PlayerLast20PlacementCard from "../cards/PlayerLast20PlacementCard";

const PlayerInfoPanel = ({ playerInfo }) => {
  const { playerLast20Matches } = usePlayerLast20Matches();


  return (
    <section className="relative w-1/4 min-w-[300px] h-[800px] bg-[#23263A] rounded-lg p-6 border border-red-600">

      {/* Absolute center the card within the panel */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-red-600">
        <PlayerCard name={playerInfo.name} tag={playerInfo.tag} profilePicUrl={playerInfo.profilePicUrl || "/default-avatar.png"}/>
        <PlayerStatsPanel region={playerInfo.region} name={playerInfo.name} tag={playerInfo.tag} />
        <PlayerLast20PlacementCard placements={playerLast20Matches} />
      </div>
    </section>
  );
};

export default PlayerInfoPanel;
